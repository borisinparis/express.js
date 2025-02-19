import bcrypt from "bcrypt";

const saltRounds = 10;

export const testMiddLeware = async (req, res, next) => {
  console.log("hello this is testMidLeware");

  console.log(cryptPassword);
};

export const validateUserMiddleware = async (req, res, next) => {
  console.log("in valid middleware");
  next();
};

export const authUserMiddleware = async (req, res, next) => {
  const cryptPassword = bcrypt.hashSync("test", saltRounds);
  console.log("middle password checked " + cryptPassword);
  console.log("in auth middleware");
  next();
};
