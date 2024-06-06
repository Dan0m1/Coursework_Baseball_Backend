import {UserService} from "../services/UserService";
import {UserMapper} from "../mappers/UserMapper";
import {Request, Response} from "express";
import {UpsertUserDTO} from "../../dtos/UpsertUserDTO";

export class UserController {
    constructor (private userService: UserService, private userMapper: UserMapper) {}

    async upsert(req: Request, res: Response){
        const body: UpsertUserDTO = {
            id: req.body.id.toString(),
            name: req.body.name,
        }

        const response = await this.userService.upsert(body);
        const user = this.userMapper.getUser(response);
        res.send(user);
    }
}