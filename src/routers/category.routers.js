import express from "express";
import { CreateCategoryController } from "../controller/categories/CreateCategory.controller.js";
export const CategoryRouter = express.Router();

CategoryRouter.post("", CreateCategoryController);
