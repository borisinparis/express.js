import express from "express";
import { AdminController } from "../controller/loginUsers/Admin.controller.js";
export const AdminRouter = express.Router();

AdminRouter.get("/", AdminController);
