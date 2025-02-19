import fs from "fs";
import bcrypt from "bcrypt";

export const CreateUser = (req, res) => {
  console.log("this is create user controller", req.body);

  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const rawUserData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUserData);
  users.push({ email: email, password: hashedPassword });
  fs.writeFileSync("src/db/users.json", JSON.stringify(users));
  res.json({ message: "Success" });
};
