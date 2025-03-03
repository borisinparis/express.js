import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { UserRouter } from "./routers/users-routers.js";
import { LoginUserRouter } from "./routers/loginUsers.routers.js";

dotenv.config();

const connectDb = async () => {
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
