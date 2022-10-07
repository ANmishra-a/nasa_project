const express = require("express");
// a router is a type of middleware that groups together related routes

const planetsRouter = express.Router();

const { getAllPlanets } = require("./planets.controllers");

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
