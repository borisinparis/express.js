import express from 'express'
import { GetUser } from "../controller/users/get-user.js";
import { CreateUser } from '../controller/users/create.user.js';

export const UserRouter = express.Router();
UserRouter.post('/',CreateUser)
UserRouter.get('/',GetUser)
// UserRouter.delete('/' ,DeleteUser)
// UserRouter.put('/',PutUser)
// UserRouter.post('/' , PostUser)
