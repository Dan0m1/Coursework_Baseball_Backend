import {ScheduleService} from "../services/ScheduleService";
import {ScheduleMapper} from "../mappers/ScheduleMapper";
import {Request, Response} from "express";
import {GetScheduleDTO} from "../../dtos/GetScheduleDTO";
import {DBSchedule} from "../../database/entities/DBSchedule";
import {ScheduleWithGamesResponse} from "../responses/ScheduleWithGamesResponse";

export class ScheduleController {
    constructor(private scheduleService: ScheduleService, private scheduleMapper: ScheduleMapper) {}

    async get(req: Request, res: Response) {
        const body: GetScheduleDTO = req.body;
        try {
            console.log("And here")

            const schedule: DBSchedule = await this.scheduleService.getByDate(body)
            const scheduleWithGames: ScheduleWithGamesResponse = this.scheduleMapper.getScheduleWithGames(schedule);
            console.log(scheduleWithGames);
            res.send(scheduleWithGames);
        } catch (e){
            if(e instanceof Error){
                if(e.message == "404"){
                    res.sendStatus(404);
                }
            }
        }
    }
}