import {Request, Response, Router} from "express";
import {userController} from "../../init/UserInit";

const router = Router();

router
    .route("/")
    .put(((req: Request, res: Response) => userController.upsert(req,res)))

export default router;