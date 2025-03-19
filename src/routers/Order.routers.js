import express from "express";
import { OrderController } from "../controller/order/CreateOrder.controller.js";
export const OrderFoodRouter = express.Router();

OrderFoodRouter.post("", OrderController);
