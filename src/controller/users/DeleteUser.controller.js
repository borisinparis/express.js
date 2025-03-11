import { Users } from "../../models/users.model.js";

export const DeleteUserController = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const deleteUser = await Users.deleteMany({ phoneNumber: phoneNumber });
    res
      .status(200)
      .json({
        success: true,
        user: deleteUser,
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
