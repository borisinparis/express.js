import express from "express";
import { GetUsers } from "../controller/users/get-user.js";
// import { CreateUser } from "../controller/users/create.user.js";
// import { PutUser } from "../controller/users/put-user.js";
// import { validateUserMiddleware } from "../middlewares/authMiddleware.js";
import { PostUser } from "../controller/users/post-user.js";

export const UserRouter = express.Router();

UserRouter.get("/", GetUsers);
UserRouter.get("/:id", GetUsers);
// UserRouter.get("/create", validateUserMiddleware, CreateUser);

// UserRouter.put("/", PutUser);
// UserRouter.delete("/", DeleteUser);
// UserRouter.post('/' , PostUser)
