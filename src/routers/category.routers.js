import express from "express";
import { CreateUserController } from "../controller/users/CreateUser.controller.js";
export const CategoryRouter = express.Router();

CategoryRouter.post("/", CreateUserController);
