import {Request, Response, Router} from "express";
import {scheduleController} from "../../init/ScheduleInit";

const router = Router();

router
    .route("/")
    .get((req: Request, res: Response) => scheduleController.get(req,res));

export default router;