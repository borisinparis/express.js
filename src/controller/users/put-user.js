import { users } from "../users/";

export const PutUser = (req, res) => {
    if (users.length > 0) {
        const { firstname, secondname } = req.body;
        users[users.length - 1] = { firstname, secondname };
        res.send("Last user updated");
    } else {
        res.status(400).send("No users to update");
    }
}