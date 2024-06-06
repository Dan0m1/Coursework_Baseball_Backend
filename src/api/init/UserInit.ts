import {UserController} from "../controllers/UserController";
import {UserMapper} from "../mappers/UserMapper";
import {UserService} from "../services/UserService";
import {UserRepository} from "../../database/repositories/UserRepository";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userMapper = new UserMapper();
export const userController = new UserController(userService, userMapper);