import {Request, Response, Router} from "express";
import {ticketController} from "../../init/TicketInit";

const router = Router();

router
    .route("/")
    .post((req: Request, res: Response) => ticketController.create(req,res))
    .get((req: Request, res: Response) => ticketController.getMany(req,res));

export default router;