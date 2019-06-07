// const express = require("express");

// var app = express();

// require("./htmlRoutes.js")(app);
var friends = require("../data/friends");


module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    //display JSON of all possible friends
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
  
    for (i = 0; i < friendsArray.length; i++){
      var friendScore = friendsArray[i].scores;
      console.log(friendsArray[i].scores)

      // for (j=0; j < userData.length; j++){
      //   console.log(userData[j].scores)
      // }

    }

  });

}

