import {DBupsertUser} from "../data/DB_user";

export async function upsertUserService(userId: number, name: string) {
    console.log(userId,typeof(userId) ,name);
    try {
        const user = await DBupsertUser(userId, name);
        return user;
    } catch (error) {
        return error;
    }
}