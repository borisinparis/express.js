import { users } from "./get-user.js";

export const DeleteUser = (req, res) => {
    const { firstName } = req.body
    const updatedUsers = users.filter(user => user.firstname.toLowerCase() !== firstName.toLowerCase());
    res.send(updatedUsers)
} 