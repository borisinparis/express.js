import { Users } from "../../models/users.model.js";

export const GetUserController = (req, res) => {
  res.json(Users).status(200);
};
