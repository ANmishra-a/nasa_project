// ******** express in built imports*****
const express = require("express");
const cors = require("cors");
// ***** imports from our own files

const planetsRouter = require("./routes/planets/planets.router");
const { AnimationObjectGroup } = require("three");
//     """"""""""code"""""""
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json()); // middleware to parse any json object from the request body

app.use(planetsRouter);

module.exports = app;
// ! kya ho rha hai ye
