import {DBupdateGame} from "../data/DB_game";

export async function updateGame(games: any) {
    for (let game of games) {
        console.log(game.id, game.ticketsAvailable)
        await DBupdateGame(game.id, game.ticketsAvailable);
    }
}