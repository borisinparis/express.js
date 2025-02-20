import express from "express";
import mongoose from "mongoose";
import { Users } from "./models/comment.model.js";

// bd connect hiiih arga
const url =
  "mongodb+srv://mnkymgaa:Miga.5247@cluster0.j4ru9.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("succesfull connected db");
  } catch (error) {
    console.log("error connect");
  }
};

connectDb();

const app = express();

const port = 3000;
app.use(express.json());

// get ==> read db ass awchrich haruulah
// post ==> post bol create hiih
//"db url" - mongodb ===> connecter  ===> mongoose ===> server
app.get("/users", async (req, res) => {
  try {
    const userData = await Users.find({});
    res.send(userData).status(200);
  } catch (error) {
    console.log("erroor", error);
    res.send().status(400);
  }
});
app.delete("/users", async (req, res) => {
  const { id } = req.body;
  try {
    const userDelete = await Users.deleteOne({
      _id: id,
    });
    res.send(userDelete).status(200);
    console.log("amjilttai");
  } catch (error) {
    console.log("erroor", error);
    res.send().status(400);
  }
});

app.post("/users", async (req, res) => {
  const { name } = req.body;
  try {
    const newUser = await Users.create({
      name,
    });
    res.send(newUser).status(200);
  } catch (error) {
    console.log("erroor", error);
    res.send().status(400);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// mongodb+srv://mnkymgaa:<db_password>@cluster0.j4ru9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://mnkymgaa:<db_password>@cluster0.j4ru9.mongodb.net/{database name}?retryWrites=true&w=majority&appName={cluseter name}
