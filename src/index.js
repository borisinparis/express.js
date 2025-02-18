// const express = require('express');
import express from "express"
import { UserRouter } from './routers/users-routers.js';

const app = express();
const port = 3000;
app.use(express.json());

app.use('/users', UserRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
