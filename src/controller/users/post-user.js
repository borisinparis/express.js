import { users } from "./get-user.js";

export const PostUser = (req, res) => {
    const { firstname, secondname } = req.body;
    users.push({ firstname, secondname });
    res.send("New user added!");
}