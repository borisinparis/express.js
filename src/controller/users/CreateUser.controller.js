import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt";
const saltRounds = 6;
export const CreateUserController = async (req, res) => {
  const { email, password } = req.body;
  const cryptPassword = bcrypt.hashSync(password, saltRounds);

  console.log(password);
  try {
    const createUser = await Users.create({
      email: email,
      password: cryptPassword,
    });

    res
      .status(200)
      .json({
        success: true,
        user: createUser,
      })
      .send();
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server errors",
      })
      .send();
  }
};
