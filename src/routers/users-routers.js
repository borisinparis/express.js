import express from "express";
import { GetUsers } from "../controller/users/get-user.js";
import { PostUser } from "../controller/users/post-user.js";
import { validateEmail } from "../middlewares/users/valiadate-user-email.js";

export const UserRouter = express.Router();

UserRouter.get("/", GetUsers);
UserRouter.post("/", validateEmail, PostUser);
