import {Game, User} from "@prisma/client";

export class DBTicket{
    id: number;
    gameId: string;
    userId: string;
    boughtAt: Date;
    email: string;
    place: string;
    transaction: string;
    game: Game;
    user: User;
}