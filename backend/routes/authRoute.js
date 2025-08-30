import { Router } from "express";
import { forgetPassword, login, logout, resetPassword, signup, verifyOtp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

authRouter.post("/forget-password", forgetPassword);
authRouter.post("/verify-otp", verifyOtp);
authRouter.post("/reset-password", resetPassword);

export default authRouter;
