import {upsertUserService} from "../services/userService";

export async function upsertUser(req: any, res:any ) {
    const { userId, name } = req.body;
    try {
        await upsertUserService(userId, name);
        res.status(200).send('User created');
    } catch (error) {
        res.status(400).send('Error creating user');
    }
}