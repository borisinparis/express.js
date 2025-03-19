import express from "express";
import { GetFoodController } from "../controller/foods/GetFood.controller.js";
import { UpdateFoodController } from "../controller/foods/UpdateFood.controller.js";
import { DeleteFoodController } from "../controller/foods/DeleteFood.controller.js";
import { CreateFoodController } from "../controller/foods/CreateFood.controller.js";
export const FoodsRouter = express.Router();

FoodsRouter.get("", GetFoodController);
FoodsRouter.post("", CreateFoodController);
FoodsRouter.patch(":id", UpdateFoodController);
FoodsRouter.delete("/:id", DeleteFoodController);
