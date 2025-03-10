import { Users } from "../../models/users.model.js";

export const DeleteUserController = async (req, res) => {
  const { email } = req.body;
  try {
    const deleteUser = await Users.deleteOne(email);
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
        message: "deleteUser server errors",
      })
      .send();
  }
};
