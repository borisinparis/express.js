import { Users } from "../../models/comment.model.js";

export const PostUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.send("email and password required").status(400);
  }
  try {
    const newUser = await Users.create({
      email: email,
      password: password,
    });
    res.send(newUser).status(200);
  } catch (error) {
    console.log("erroor", error);
    res.send().status(400);
  }
};
