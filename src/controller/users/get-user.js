import { Users } from "../../models/comment.model.js";
export const GetUsers = async (req, res) => {
  const { email } = req.body;
  try {
    const userData = await Users.find({ email });
    res.send(userData).status(200);
  } catch (error) {
    console.log("erroor", error);
    res.send().status(400);
  }
};

// index.js ==> app.use ==> router ==> middle ? ==> contoller
//middle 2
// 1 sign up ==> create user existed?
//2 login  ==> password match

// export const GetUser = (req, res) => {
//   const rawUserData = fs.readFileSync("src/db/users.json");
//   const users = JSON.parse(rawUserData);
//   res.send(users);
// };
