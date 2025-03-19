import express from "express";
import { CreateCategoryController } from "../controller/categories/CreateCategory.controller.js";
import { GetCategoryController } from "../controller/categories/GetCategory.controller.js";
import { DeleteCategoryController } from "../controller/categories/DeleteCategory.controller.js";
export const CategoryRouter = express.Router();

CategoryRouter.post("", CreateCategoryController);
CategoryRouter.get("", GetCategoryController);
CategoryRouter.delete("", DeleteCategoryController);
