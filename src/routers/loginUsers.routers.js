import express from "express";
import { LoginUserController } from "../controller/loginUsers/LoginUser.controller.js";
export const LoginUserRouter = express.Router();
LoginUserRouter.post("/login", LoginUserController);
