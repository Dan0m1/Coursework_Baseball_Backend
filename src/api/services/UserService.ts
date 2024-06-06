import {UserRepository} from "../../database/repositories/UserRepository";
import {UpsertUserDTO} from "../../dtos/UpsertUserDTO";
import {DBUser} from "../../database/entities/DBUser";

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async upsert(body: UpsertUserDTO): Promise<DBUser>{
        const{id, name} = body;

        return this.userRepository.upsertById(id, name);
    }
}