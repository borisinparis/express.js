import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userFound = await Users.findOne({ email });

    if (userFound) {
      if (password) {
        const isMatch = await bcrypt.compare(password, userFound.password);
        const dateAsMiloSecond = Date.now();
        console.log(dateAsMiloSecond);
        const currentDate = new Date(dateAsMiloSecond).toLocaleString();

        const dateAsSecond = Math.floor(dateAsMiloSecond / 1000);
        console.log(dateAsMiloSecond);
        const currentDateInSeconds = new Date(
          dateAsSecond * 1000
        ).toLocaleString();

        const expirationTime = dateAsSecond + 60 * 60;
        const expirationDate = new Date(expirationTime * 1000).toLocaleString();
        const decodePassword = "123";
        if (isMatch) {
          const token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              data: userFound,
            },
            decodePassword
          );
          console.log("this is token", token);
          const decoded = jwt.verify(token, "123");
          console.log("this is decoded", token);

          return res.status(200).json({
            success: true,
            user: userFound,
            token: token,
          });
        } else {
          return res.status(401).json({
            success: false,
            message: "Incorrect password",
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          message: "Password is required",
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "Email not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Error: ${err.message}`,
    });
  }
};
