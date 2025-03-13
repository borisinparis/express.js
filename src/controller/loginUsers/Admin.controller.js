import { Users } from "../../models/users.model.js";

export const AdminController = async (req, res) => {
  try {
    const users = await Users.find();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching users" });
  }
};
