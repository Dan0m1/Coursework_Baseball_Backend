const Joi = require('joi');
import {getScheduleService} from "../services/scheduleService";

const schema = Joi.date().greater('now').required();

export async function getSchedule(req: any, res: any){
    const {year,month,day} = req.body;

    const date = [year, month, day].join('-');
    const {error} = schema.validate(date);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        const schedule = await getScheduleService(year, month, day);
        if(schedule===null || schedule.length===0){
            return res.sendStatus(404);
        }
        return res.send(schedule);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(500);
    }

}

