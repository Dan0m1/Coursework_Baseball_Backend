import {DBGame} from "../../database/entities/DBGame";
import {GameResponse} from "../responses/GameResponse";

export class GameMapper {
    getGame(game: DBGame): GameResponse{
        return {
            id: game.id,
            name: game.name,
            team: {
                home: game.homeTeam,
                away: game.awayTeam,
            },
            venue: {
                fullName: game.venueFullName,
                city: game.venueCity,
                state: game.venueState,
            },
            tickets: {
                numberAvailable: game.ticketsAvailable,
                price: game.ticketsPrice,
            },
            startDate: game.startDate
        };
    }
}