import { put, findByColumn, DELETE } from "@/utils/mysqlHelpers";
import { getSession } from "next-auth/client";

export default async function novini(req, res) {
    if (req.method === 'GET') {
        const novina = await findByColumn('posts', req.query.novinaId, 'ID');
        console.log(novina[0][0])
        novina[0][0].Count++;
        put('posts', { Count: novina[0][0].Count }, req.query.novinaId).then(() => {
            res.status(200).json(novina[0][0]);
        })
            .catch(() => {

            });
        return;
    }

    const session = await getSession({ req: req });

    if (!session) {
        res.status(401).json({ message: 'Not authenticated!' });
        return;
    }

    if (req.method === 'PUT') {
        const record = req.body;
        const ID = req.query.novinaId;

        put('posts', record, ID)
            .then(createdPost => {
                res.status(200)
                    .json({ ID })
            }).catch();
    } else if (req.method === 'DELETE') {
        const ID = req.query.novinaId;
        DELETE('posts', ID).then(() => {
            res.status(200)
                .json({ message: 'Successful delete!' })
        }).catch();
    }
};