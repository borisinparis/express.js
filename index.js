const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // To parse JSON bodies

const users = [
    { name: "gardi" },
    { name: "hurem" },
];

// GET - Retrieve users
app.get('/users', (req, res) => {
  res.send(users);
});

// POST - Add a new user
app.post('/users', (req, res) => {
    const { firstname, secondname } = req.body; // Get data from request body
    users.push({ firstname, secondname });
    res.send("New user added!");
});

// DELETE - Remove the last user
app.delete('/users', (req, res) => {
    users.pop(); // Remove the last user
    res.send("Last user deleted");
});

// PUT - Modify the last user
app.put('/users', (req, res) => {
    if (users.length > 0) {
        const { firstname, secondname } = req.body;
        users[users.length - 1] = { firstname, secondname }; // Modify last user
        res.send("Last user updated");
    } else {
        res.status(400).send("No users to update");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
