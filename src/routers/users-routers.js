import express from "express";
import { CreateUserController } from "../controller/users/CreateUser.controller.js";
import { validateEmail } from "../middlewares/users/validateEmailMiddleWares.js";
import { validatePassword } from "../middlewares/users/validatePasswordMiddleWares.js";
import { DeleteUserController } from "../controller/users/DeleteUser.controller.js";

export const UserRouter = express.Router();

UserRouter.post(
  "/sign-up",
  validateEmail,
  validatePassword,
  CreateUserController
);
UserRouter.delete("/sign-up", DeleteUserController);
