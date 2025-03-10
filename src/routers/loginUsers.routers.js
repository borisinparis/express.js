import express from "express";
import { GetUserController } from "../controller/users/GetUser.controller.js";
import { validateLogin } from "../middlewares/login/validateLoginMiddleWares.js";
export const LoginUserRouter = express.Router();
LoginUserRouter.post("/login", validateLogin, GetUserController);
