const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const users = [
    { firstname: "omd", secondname: "tsamts" },
];


app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {

    const { firstname, secondname } = req.body;
    users.push({ firstname, secondname });
    res.send("New user added!");
});

app.delete('/users', (req, res) => {
    const { firstname } = req.body;


    const updatedUsers = users.filter(user => user.firstname.toLowerCase() !== firstname.toLowerCase());
    res.send(updatedUsers)

});

app.put('/users', (req, res) => {
    if (users.length > 0) {
        const { firstname, secondname } = req.body;
        users[users.length - 1] = { firstname, secondname };
        res.send("Last user updated");
    } else {
        res.status(400).send("No users to update");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
