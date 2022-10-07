/*
this is one way of creations server 
const express = require("express");

const app = express();
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
const PORT = process.env.PORT || 8000;
*/
// the other way to create a server is to use the express built in http and http.createServer method

// &******** express in built imports*****
const http = require("http");

//! ***** imports from our own files
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");
// **** code start here****
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
}

startServer();
