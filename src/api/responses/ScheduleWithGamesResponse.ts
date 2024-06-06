import {ScheduleResponse} from "./ScheduleResponse";
import {GameResponse} from "./GameResponse";

export class ScheduleWithGamesResponse extends ScheduleResponse {
    games: GameResponse[];
}