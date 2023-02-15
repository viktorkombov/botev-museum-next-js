
require('dotenv').config()
const { createServer } = require('http');
const next = require('next');
const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");
const NextAuth = require("next-auth").default;
const nextAuthOptions = require('./next-auth-options');

const hostname = 'localhost';
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();

const app = express();
const server = createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const baseUrl = "/api/auth/";

process.env["NEXTAUTH_URL"] = "http://localhost:3000";
process.env["NEXTAUTH_SECRET"] = "secret-santa";

(async () => {
    await nextApp.prepare();

    app.use((req, res, next) => {
        if (!req.url.startsWith(baseUrl)) {
            return next();
        }
        // Fill in the "nextauth" [catch all route parameter](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes)
        req.query.nextauth = req.url // start with request url
            .slice(baseUrl.length) // make relative to baseUrl
            .replace(/\?.*/, "") // remove query part, use only path part
            .split("/"); // as array of strings
        NextAuth(req, res, nextAuthOptions);
    });

    app.use('/uploads', express.static(path.join('uploads')));


    app.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
})();