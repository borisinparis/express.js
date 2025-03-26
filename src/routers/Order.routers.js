import express from "express";
import { CreateOrderController } from "../controller/order/CreateOrder.controller.js";
import { GetFoodOrderController } from "../controller/order/GetOrder.controller.js";
export const OrderFoodRouter = express.Router();

OrderFoodRouter.post("", CreateOrderController);
OrderFoodRouter.get("", GetFoodOrderController);
