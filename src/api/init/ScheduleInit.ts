import {ScheduleController} from "../controllers/ScheduleController";
import {ScheduleService} from "../services/ScheduleService";
import {ScheduleRepository} from "../../database/repositories/ScheduleRepository";
import {APISchedule} from "../../database/external/APISchedule";
import {gameService} from "./GameInit";
import {ScheduleMapper} from "../mappers/ScheduleMapper";


const scheduleRepository = new ScheduleRepository();
const apiSchedule = new APISchedule();
const scheduleService = new ScheduleService(scheduleRepository, apiSchedule, gameService);
const scheduleMapper = new ScheduleMapper();
export const scheduleController = new ScheduleController(scheduleService, scheduleMapper);