import { hashPassword } from "@/utils/auth";
import { post } from "@/utils/mysqlHelpers";

async function handler(req, res) {
    const data = req.body;

    const {username, password} = data;

    if (!username && !password) {
        res.status(422).json({message: 'Invalid status!'});
        return;
    }

    try {
        const hashedPassword = await hashPassword(password);
        post('users', {username, password: hashedPassword}).then(result => {
            res.status(201).json({message: 'User was created successfully!'})
        })
    } catch (err) {
        res.status(500).json({message: 'Something went wrong!'});
    }
}

export default handler;