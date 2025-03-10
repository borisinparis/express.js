import { Users } from "../../models/users.model.js";
export const LoginUserController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await Users.create(email, password);
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", error: "error" });
  }
};

// try {
//   const loginUser = await Users.findOne({ email: email });
//   console.log(loginUser);
//   const isMatch = await bcrypt.compare(password, loginUser.password);
//   if (!isMatch) {
//     return res.status(400).json({
//       success: false,
//       message: "incorrect password",
//     });
//   } else {
//     res
//       .status(400)
//       .json({
//         success: true,
//         user: loginUser,
//       })
//       .send();
//   }
// } catch (error) {
//   res.status(500).send("server error");
// }
