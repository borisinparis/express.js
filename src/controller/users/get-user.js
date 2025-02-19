import fs from "fs";

export const GetUser = (req, res) => {
  const rawUserData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUserData);
  res.send(users);
};
// index.js ==> app.use ==> router ==> middle ? ==> contoller
//middle 2
// 1 sign up ==> create user existed?
//2 login  ==> password match
