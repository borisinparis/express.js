import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt";
export const LoginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const loginUser = await Users.findOne({ email });
    console.log(loginUser);
    const isMatch = await bcrypt.compare(password, loginUser.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "incorrect password",
      });
    } else {
      res
        .status(400)
        .json({
          success: true,
          user: loginUser,
        })
        .send();
    }
  } catch (error) {
    res.status(500).send("server error");
  }
};
