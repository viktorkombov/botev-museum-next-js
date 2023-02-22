import { convertToLatin, getDate } from "@/utils/backendFunctions";
import { getAll, post } from "@/utils/mysqlHelpers";
import { getSession } from "next-auth/client";

export default async function novini(req, res) {
    if (req.method === 'GET') {
        const columns = req.query.columns ? req.query.columns : '*';
        const orderBy = req.query.orderby;

        getAll('posts', columns, orderBy, req.query.limit, req.query.dir, req.query.notEqualTo)
            .then(([result]) => {
                res.json(result);
            })
            .catch((err) => res.status(500).json({message: err}));
    } else if (req.method === 'POST') {
        const session = await getSession({ req: req });

        if (!session) {
            res.status(401).json({ message: 'Not authenticated!' });
            return;
        }
        const record = req.body;
        // console.log(req.body)
        console.log(record.title)
        const translatedTitle = getDate() + convertToLatin(record.title, '_');

        record.ID = translatedTitle;
        record.Date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        record.count = 0;

        post('posts', record)
            .then(createdPost => {
                res.status(200)
                    .json({ID: translatedTitle})
            }).catch();
    } else {
        res.status(403).json({message: 'This method is not allowed!'});
    }
};