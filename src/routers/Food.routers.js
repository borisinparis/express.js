import express from "express";
import { GetFoodController } from "../controller/foods/GetFood.controller.js";
import { UpdateFoodController } from "../controller/foods/UpdateFood.controller.js";
import { DeleteFoodController } from "../controller/foods/DeleteFood.controller.js";
export const FoodsRouter = express.Router();

FoodsRouter.get("/id", GetFoodController);
FoodsRouter.patch("/:id", UpdateFoodController);
FoodsRouter.delete(":id", DeleteFoodController);
