import {GameRepository} from "../../database/repositories/GameRepository";
import {GameUpdateManyDTO} from "../../dtos/GameUpdateManyDTO";
import {DBGame} from "../../database/entities/DBGame";
import {GetGameDTO} from "../../dtos/GetGameDTO";

export class GameService {
    constructor(private gameRepository: GameRepository){}

    async updateMany(body: GameUpdateManyDTO): Promise<DBGame[]>{
        const {games} = body

        return new Promise((resolve, reject) =>{
            const response: DBGame[] = [];
            for (let game of games) {
                this.gameRepository.updateById(game.id, {ticketsAvailable: game.ticketsAvailable}).then((game) =>{
                    response.push(game);
                });
            }
            resolve(response);
        })
    }

    async getById(body: GetGameDTO): Promise<DBGame> {
        const {id} = body;

        return this.gameRepository.findById(id);
    }
}