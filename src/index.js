import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { UserRouter } from "./routers/users-routers.js";
import { LoginUserRouter } from "./routers/loginUsers.routers.js";
import { FoodsRouter } from "./routers/food.routers.js";
import { AdminRouter } from "./routers/admin.routers.js";
import { CategoryRouter } from "./routers/category.routers.js";
import { OrderFoodRouter } from "./routers/order.routers.js";
let isConnected = false;
dotenv.config();

const connectDb = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_URL);
    console.log("succesfull connected db");
  } catch (error) {
    console.log("error connect", error);
  }
};

connectDb();

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

app.use("/users", UserRouter);
app.use("/users", LoginUserRouter);
app.use("/admin", AdminRouter);
app.use("/category", CategoryRouter);
app.use("/foods", FoodsRouter);
app.use("/order", OrderFoodRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
