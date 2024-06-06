import {DBUser} from "../../database/entities/DBUser";
import {UserResponse} from "../responses/UserResponse";

export class UserMapper {
    getUser(user: DBUser): UserResponse{
        return {
            id: user.id,
            name: user.name,
        }
    }
}