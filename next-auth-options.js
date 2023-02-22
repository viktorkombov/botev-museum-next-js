const Providers = require("next-auth/providers").default;
const { verifyPassword, findUserById } = require("./utils/auth");

const nextAuthOptions = {
    session: {
        jwt: true
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const responseData = await findUserById(credentials.username);
                const user = responseData[0][0];

                if (!user) {
                    return null;
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                if (!isValid) {
                    return null;
                }

                return { username: user.username };
            }
        })
    ]
}

module.exports = nextAuthOptions;