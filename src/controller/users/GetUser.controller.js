import { Users } from "../../models/users.model";

export const GetUserController = (req, res) => {
  const { email } = req.body;
  const emailCheck = Users.findOne({ email });
  if (emailCheck) {
    res.send(false).status(400);
  } else {
    next();
  }
};
