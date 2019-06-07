friendsArray = [

    {
        "name":"Abed",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFYVRJ4qLCXURkbKmFKSB8HdDpm-2Amk5ceBHF52oe1CCDsfe",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }, 
      {
        "name":"Bob",
        "photo":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mocking-spongebob-1556133078.jpg",
        "scores":[
            1,
            1,
            2,
            2,
            5,
            1,
            2,
            3,
            4,
            1
          ]
      },
      {
        "name":"Dwight",
        "photo":"https://m.media-amazon.com/images/M/MV5BMjEzNTc0MzUxNF5BMl5BanBnXkFtZTcwNTUzMjI0NA@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
        "scores":[
            1,
            5,
            4,
            3,
            5,
            1,
            4,
            1,
            3,
            5
          ]
      }
]

//Convert each user's results into a simple array of numbers
console.log("Name: "+friendsArray[0].scores);

module.exports = friendsArray;
