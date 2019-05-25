const express = require("express");
const path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;



app.get("/survey", function(req, res) {
    //survey page
    
  });

  app.get("*", function(req, res) {
    
  
    //home.html
    
  });