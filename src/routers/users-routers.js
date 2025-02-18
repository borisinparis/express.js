import express from 'express'
import { GetUser } from "../controller/users/get-user.js";
import { CreateUser } from '../controller/users/create.user.js';
import { PutUser } from '../controller/users/put-user.js';

export const UserRouter = express.Router();
UserRouter.post('/',CreateUser)
UserRouter.get('/',GetUser)
UserRouter.put('/',PutUser)
// UserRouter.delete('/' ,DeleteUser)
// UserRouter.post('/' , PostUser)
