import {DBSchedule} from "../../database/entities/DBSchedule";
import {ScheduleResponse} from "../responses/ScheduleResponse";
import {GameResponse} from "../responses/GameResponse";
import {ScheduleWithGamesResponse} from "../responses/ScheduleWithGamesResponse";

export class ScheduleMapper {
    getSchedule(schedule: DBSchedule): ScheduleResponse {
        return{
            id: schedule.id,
            date: schedule.date,
            updatedAt: schedule.updatedAt
        }
    }

    getGames(schedule: DBSchedule): GameResponse[] {
        return schedule.games.map((game) => ({
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
        }));
    }

    getScheduleWithGames(schedule: DBSchedule): ScheduleWithGamesResponse {
        const scheduleResponse = this.getSchedule(schedule);
        return {
            ...scheduleResponse,
            games: this.getGames(schedule)
        }
    }
}