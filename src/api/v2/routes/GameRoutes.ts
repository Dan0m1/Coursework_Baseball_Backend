import {Router, Request, Response} from "express";

import {gameController} from "../../init/GameInit";

const router = Router();

router
    .route("/")
    .get((req: Request, res: Response) => gameController.get(req,res));

export default router;