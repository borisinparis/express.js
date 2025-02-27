import { Users } from "../../models/users.model.js";

export const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    email.match(validRegex) &&
    email.includes(".com") &&
    email.includes("gmail")
  ) {
    const userEmail = await Users.findOne({ email: email });

    if (userEmail) {
      res
        .status(400)
        .json({
          success: false,
          message: "Found user with this email",
        })
        .send();
    } else {
      next();
    }
  } else {
    res
      .status(400)
      .json({
        success: false,
        message: "Email format required",
      })
      .send();
  }
};
// export const validatePassword = async (req,res,next) => {
//   const {password} = req.body

// }

// password crypt
// import bcrypt from "bcrypt";

// const saltRounds = 10;

// export const testMiddLeware = async (req, res, next) => {
//   console.log("hello this is testMidLeware");

//   console.log(cryptPassword);
// };

// export const validateUserMiddleware = async (req, res, next) => {
//   console.log("in valid middleware");
//   next();
// };

// export const authUserMiddleware = async (req, res, next) => {
//   const cryptPassword = bcrypt.hashSync("test", saltRounds);
//   console.log("middle password checked " + cryptPassword);
//   console.log("in auth middleware");
//   next();
// };

// import fs from "fs";
// import bcrypt from "bcrypt";

// export const CreateUser = (req, res) => {
//   console.log("this is create user controller", req.body);

//   const { email, password } = req.body;
//   const hashedPassword = bcrypt.hashSync(password, 8);
//   const rawUserData = fs.readFileSync("src/db/users.json");
//   const users = JSON.parse(rawUserData);
//   users.push({ email: email, password: hashedPassword });
//   fs.writeFileSync("src/db/users.json", JSON.stringify(users));
//   res.json({ message: "Success" });
// };
