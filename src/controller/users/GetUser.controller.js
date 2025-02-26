import { Users } from "../../models/users.model.js";

export const GetUserController = (req, res) => {
  const { email } = req.body;
  const CreatedEmail = Users.create({ email: email });
};
