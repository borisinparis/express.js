import express from "express";
import { LoginUserController } from "../controller/loginUsers/LoginUser.controller.js";
import { GetUserController } from "../controller/users/GetUser.controller.js";
export const LoginUserRouter = express.Router();
LoginUserRouter.get("/login", GetUserController);
LoginUserRouter.post("/login", LoginUserController);
