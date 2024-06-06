import {GameService} from "../services/GameService";
import {GameRepository} from "../../database/repositories/GameRepository";
import {GameController} from "../controllers/GameController";
import {GameMapper} from "../mappers/GameMapper";

const gameRepository = new GameRepository();
export const gameService = new GameService(gameRepository);
const gameMapper = new GameMapper();
export const gameController = new GameController(gameService, gameMapper);