
const express = require("express");
const morgan = require("morgan");

const mainRouter = require("./Router");
const cors = require("cors");
require('dotenv').config();


const app = express();

app.use(morgan("dev"));

app.use(express.json());



app.use(cors({ origin: "https://proyecto-marvel-six.vercel.app" }));

app.use(mainRouter);


module.exports = app;