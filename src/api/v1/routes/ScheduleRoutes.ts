import {Router} from "express";
import {getSchedule} from "../../controllers/scheduleController";

const router = Router();

router
    .route("/")
    .get(getSchedule);

export default router;