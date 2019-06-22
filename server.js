//requirements
const express = require("express");
const path = require('path');
var mysql = require('mysql');
var app = express();



// var htmlRoutes =require("./app/routing/htmlRoutes.js")

var PORT = process.env.PORT || 8080;
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

var friends = require("./app/data/friends.js");
// just an example route require("./app/routes/api-routes.js")(app);

//connect to docker instance 
var connection = mysql.createConnection({
  host: "192.168.99.100",
  port: 3306,
  user: "root",
  password: "docker",
  // database: "pets_db"
});

//Give connection ID if properly connected, otherwise, throw an error 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  app.listen(PORT, function() {
    // Log when the server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });