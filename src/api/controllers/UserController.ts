import {UserService} from "../services/UserService";
import {UserMapper} from "../mappers/UserMapper";
import {Request, Response} from "express";
import {UpsertUserDTO} from "../../dtos/UpsertUserDTO";
import {DBUser} from "../../database/entities/DBUser";
import {UserResponse} from "../responses/UserResponse";

export class UserController {
    constructor (private userService: UserService, private userMapper: UserMapper) {}

    async upsert(req: Request, res: Response){
        const body: UpsertUserDTO = {
            id: req.body.id.toString(),
            name: req.body.name,
        }

        const response: DBUser = await this.userService.upsert(body);
        const user: UserResponse = this.userMapper.getUser(response);
        res.send(user);
    }
}