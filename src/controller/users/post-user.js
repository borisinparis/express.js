export let users = [];
export const PostUser = (req, res) => {
  const { userName, password } = req.body;
  users.push(req.body);
  res.send("New user added!");
};
