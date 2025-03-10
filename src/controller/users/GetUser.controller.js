import { Users } from "../../models/users.model.js";

export const GetUserController = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", error: "error" });
  }
};
