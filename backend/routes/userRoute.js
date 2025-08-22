import {Router} from "express";
import { getCurrentuser } from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const userRoute = Router();

userRoute.get("/current", isAuth, getCurrentuser);

export default userRoute;