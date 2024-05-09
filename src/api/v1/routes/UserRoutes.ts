import {Router} from "express";
import {upsertUser} from "../../controllers/userController";

const router = Router();

router
    .route("/")
    .put(upsertUser)

export default router;