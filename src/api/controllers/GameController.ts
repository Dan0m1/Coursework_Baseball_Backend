import {GameService} from "../services/GameService";
import {GameMapper} from "../mappers/GameMapper";
import {Request, Response} from "express";
import {GetGameDTO} from "../../dtos/GetGameDTO";
import {GameResponse} from "../responses/GameResponse";

export class GameController {
    constructor(private gameService: GameService, private gameMapper: GameMapper) {}

    async get(req: Request, res: Response) {
        const body: GetGameDTO = req.body;

        const response = await this.gameService.getById(body);
        const game: GameResponse = this.gameMapper.getGame(response);
        res.send(game);
    }
}