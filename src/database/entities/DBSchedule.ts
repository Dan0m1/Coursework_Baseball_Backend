import {Game} from "@prisma/client";

export class DBSchedule {
    id: number;
    date: string;
    updatedAt: Date | string;
    games: Game[];
}