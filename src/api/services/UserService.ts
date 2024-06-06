import {UserRepository} from "../../database/repositories/UserRepository";
import {UpsertUserDTO} from "../../dtos/UpsertUserDTO";

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async upsert(body: UpsertUserDTO){
        const{id, name} = body;

        return this.userRepository.upsertById(id, name);
    }
}