import {DBGame} from "../database/entities/DBGame";

export class CreateScheduleDTO {
    games: DBGame[];
    date: string;
}