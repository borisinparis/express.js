import { Users } from "../../models/users.model.js";

export const GetUserController = (req, res) => {
  res.send(Users).status(200);
};
