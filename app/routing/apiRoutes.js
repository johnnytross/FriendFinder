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
    
  let friendsMatch = {
    name: "",
    photo: "",
    difference: Infinity
  };

  let userData = req.body;
  let userScores = userData.scores;

  let totalDifference;

    for (i = 0; i < friendsArray.length; i++){
      var currentFriend = friendsArray[i];
      console.log(currentFriend.name);
      totalDifference = 0;

      for (j=0; j < currentFriend.score.length; j++){
      var friendScore = currentFriend.score[j];
      var currentUserScore = userScores[j];

      totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(friendScore));
      }

      if (totalDifference <= friendsMatch.difference){
        friendsMatch.name = currentFriend.name;
        friendsMatch.photo = currentFriend.photo;
        friendsMatch.difference = totalDifference;
      }
    }
    friendsArray.push(userData);

    res.json(friendsMatch);

  });

};

