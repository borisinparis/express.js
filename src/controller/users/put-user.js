import fs from 'fs'

export const PutUser = (req, res) => {

        const rawUserData = fs.readFileSync('src/db/users.json')
        const userParse = JSON.parse(rawUserData)

    if (userParse.length > 0) {
        const { firstname, secondname } = req.body;
        userParse[userParse.length - 1] = { firstname, secondname };
        res.send("Last user updated");
    } else {
        res.status(400).send("No users to update");
    }
}