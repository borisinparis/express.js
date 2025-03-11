import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt";

export const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userFound = await Users.findOne({ email });

    if (userFound) {
      if (password) {
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (isMatch) {
          return res.status(200).json({
            success: true,
            user: userFound,
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
