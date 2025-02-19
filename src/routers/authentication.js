import express from "express";
import { CreateUser } from "../controller/users/create.user.js";
import fs from "fs";
import bcrypt from "bcrypt";
import { error } from "console";

export const Authentication = express.Router();

const loginUser = (req, res) => {
  const { email } = req.body;
  const rawUserData = fs.readFileSync("src/db/users.json");
  const user = JSON.parse(rawUserData).find((data) => data.email === email);
  res.status(200).json({
    success: true,
    user: user,
  });
};
const validateSignUpInput = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    res.status(400).json({ error: "bad request", message: "email required" });
  } else if (!password) {
    res
      .status(400)
      .json({ error: "bad request", message: "password required" });
  } else {
    next();
  }
};

Authentication.post("/login", validateSignUpInput, loginUser);
Authentication.post("/sign-up", validateSignUpInput, CreateUser);
