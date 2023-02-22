import db from '@/utils/db';
import formidable from 'formidable';
import { promises as fs } from "fs";
import { getSession } from 'next-auth/client';
import path from "path";
import { v1 } from 'uuid';

export const config = {
    api: {
        bodyParser: false,
    },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    if (req.method === 'POST') {
        const session = await getSession({ req: req });

        if (!session) {
            res.status(401).json({ message: 'Not authenticated!' });
            return;
        }

        const form = new formidable.IncomingForm();
        form.uploadDir = "./";
        form.keepExtensions = true;
        form.parse(req, async (err, fields, file) => {
            if (file) {
                file = file.file;
                console.log(file);
                const MIME_TYPE_MAP = {
                    'image/png': 'png',
                    'image/jpeg': 'jpeg',
                    'image/jpg': 'jpg',
                    'application/pdf': 'pdf',
                    'application/msword': 'doc',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx'
                };
                /* Check whether the mimetype is correct */
                try {
                    const isValid = !!MIME_TYPE_MAP[file.mimetype];
                    if (!isValid) {
                        throw new Error('Invalid mime type!');
                    }
                } catch (err) {
                    res.status(403).json({ message: 'Invalid mime type!' });
                }

                /* Create directory for uploads */
                const targetPath = path.join(process.cwd(), `/uploads/`);
                try {
                    await fs.access(targetPath);
                } catch (e) {
                    await fs.mkdir(targetPath);
                }

                /* Move uploaded files to directory */
                try {
                    const tempPath = file.filepath;
                    const ext = MIME_TYPE_MAP[file.mimetype];
                    const newFileName = v1() + '.' + ext;
                    await fs.rename(tempPath, targetPath + newFileName);
                    const values = ['uploads\\/' + newFileName, fields.title, new Date().toISOString().slice(0, 19).replace('T', ' '), file.mimetype];
                    db.execute(`INSERT INTO uploads (src, title, date, type) VALUES (?,?,?,?)`, values).then(result => res.status(201).send(result));
                } catch (err) {
                    console.error(err)
                    res.status(500).json({ message: 'Something went wrong!' });
                }
            }
        });
    } else if (req.method === 'GET') {
        try {
            db.execute(`SELECT * FROM uploads ORDER BY DATE DESC`).then(result => {
                res.status(200).json(result[0]);
            });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong!' });
        }
    } else {
        res.status(405).json({ message: 'This method is not allowed!' })
    }
};