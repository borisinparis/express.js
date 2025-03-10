import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt";

export const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const userFound = Users.findOne(email);
  try {
    if (userFound) {
      if (password) {
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (isMatch) {
          res
            .status(400)
            .json({
              success: true,
              user: userFound,
            })
            .send();
          next();
        }
      } else {
        res
          .status(500)
          .json({ success: false, message: `not found by id ${err}` });
      }
      res.status(200).json({ success: true, message: "mail checked" });
    } else {
      res.status(303).json({ success: false, message: "check your mail" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: `not found by ${err}` });
  }
};
