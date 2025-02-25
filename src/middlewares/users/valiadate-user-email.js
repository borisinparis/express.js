import { Users } from "../../models/comment.model.js";

export const validateEmail = async (req, res, next) => {
  const { email, password } = req.body;

  const userEmail = await Users.data.findOne({ email });

  if (userEmail) {
    res.send(userEmail);
    console.log("mail bgaa uchir bolohgui");
  } else {
    console.log("bhqu bna");
    next();
  }
};
