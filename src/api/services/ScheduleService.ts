import {ScheduleRepository} from "../../database/repositories/ScheduleRepository";
import {DBSchedule} from "../../database/entities/DBSchedule";
import {CreateScheduleDTO} from "../../dtos/CreateScheduleDTO";
import {UpdateScheduleDTO} from "../../dtos/UpdateScheduleDTO";
import {GetScheduleDTO} from "../../dtos/GetScheduleDTO";
import {API_DBSchedule} from "../../database/entities/API_DBSchedule";
import {APISchedule} from "../../database/external/APISchedule";
import {GameService} from "./GameService"

export class ScheduleService {
    constructor(private scheduleRepository: ScheduleRepository, private apiSchedule: APISchedule, private gameService: GameService){}

    async create(body: CreateScheduleDTO): Promise<DBSchedule> {
        const {games, ...data} = body;
        return this.scheduleRepository.create({
            ...data,
            games: {
                createMany: {
                    data: games
                }
            }
        })
    }

    async update(body: UpdateScheduleDTO): Promise<DBSchedule> {
        const {id} = body;
        return this.scheduleRepository.updateById(id)
    }

    async getByDate(body: GetScheduleDTO) {
        const {date} = body;
        const request = date.split('-')
        const payload = {
            year: request[0],
            month: request[1],
            day: request[2],
        }

        let APIresponse: API_DBSchedule;
        let DBresponse: DBSchedule;
        let id: number;
        let result;
        DBresponse = await this.scheduleRepository.findByDate(date);
        console.log(DBresponse)
        if(DBresponse === undefined || DBresponse === null) {
            APIresponse = await this.apiSchedule.get(payload);
            console.log(APIresponse)
            if(APIresponse.games.length === 0){
                console.log("error")
                throw new Error("404");
            }

            try {
                result = await this.buildResponse(APIresponse);
            }catch(err){
                console.log(err)
            }
            DBresponse = await this.create({games: result, date: date});

            return (DBresponse);
        }

        if (new Date(DBresponse.updatedAt) < new Date(new Date().getTime() - 1000 * 60 * 10)) {
            id = DBresponse.id
            APIresponse = {games:(await this.apiSchedule.get(payload)).games};
            result = await this.buildResponse(APIresponse);
            await this.gameService.updateMany({games:result})

            DBresponse = await this.update({id})
            return(DBresponse);
        }

        return(DBresponse);
    }

    private async buildResponse(response: API_DBSchedule) {
        console.log(response)
        const result = [];
        for (const game in response.games){
            const element = {
                name: response.games[game].name,
                id: response.games[game].id.toString(),
                homeTeam: response.games[game].competitions["0"].competitors["0"].team.displayName,
                awayTeam: response.games[game].competitions["0"].competitors["1"].team.displayName,
                venueFullName: response.games[game].competitions["0"].venue.fullName,
                venueCity: response.games[game].competitions["0"].venue.address.city,
                venueState: response.games[game].competitions["0"].venue.address.state,
                ticketsPrice: response.games[game].competitions["0"].tickets["0"].summary,
                ticketsAvailable: response.games[game].competitions["0"].tickets["0"].numberAvailable,
                startDate:response.games[game].competitions["0"].startDate
            }
            console.log(element);
            result.push(element);
            console.log(result.length)
        }
        console.log(result)
        return result;
    }
}
