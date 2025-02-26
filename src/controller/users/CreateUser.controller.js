import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt";
const saltRounds = 6;
export const CreateUserController = async (req, res) => {
  const { email, password } = req.body;
  const cryptPassword = bcrypt.hashSync(password, saltRounds);

  try {
    const CreateUser = await Users.create({
      email: email,
      password: cryptPassword,
    });
    console.log(CreateUser);
    res.send(CreateUser).status(200);
  } catch (err) {
    res.send("error").status(400);
  }
};
