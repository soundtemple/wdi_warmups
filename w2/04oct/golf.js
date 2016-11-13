console.log('WARMUP OCT3');


var scores = [['Par', 3,4,5,5,3,3,4,3,5],
  ['Bob', 3,2,6,11,9,2,6,9,10],
  ['Jimbo', 5,12,9,22,13,7,16,10,11],
  ['Fish', 2,2,4,5,4,3,6,4,1]
]

parScore = function(){
  var total = 0;
  for (s=1; s<=9; s++) {
    total = total + scores[0][s];
  }
  return total;
}
var parRound = parScore();

totalScores = function(player){
  var total =0;
  var overUnder = ' Even';
  for (s=1; s<=9; s++) {
    total = total + scores[player][s];
  }
  if (parRound < total) {
    overUnder = ' Over';
  } else if (parRound > total) {
    overUnder = ' Under';
  }
  return scores[player][0] + ' Total: ' + total + ' ' + Math.abs(parRound - total) + overUnder;
  }




var par = totalScores(0);
console.log(par);

var bob = totalScores(1);
console.log(bob);

var jimbo = totalScores(2);
console.log(jimbo);

var fish = totalScores(3);
console.log(fish);

// Mini Golf Scores
//
// Exercise
//
// Bob, Jimbo and Fish love mini golf. But, like all good golfers they enjoy the 19th hole the most. Every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and 'console.logs' the total for the club house.
//
// Bob
//
// Hole 1 = 3
// Hole 2 = 2
// Hole 3 = 6
// Hole 4 = 11
// Hole 5 = 9
// Hole 6 = 2
// Hole 7 = 6
// Hole 8 = 9
// Hole 9 = 10
// Jimbo
//
// Hole 1 = 5
// Hole 2 = 12
// Hole 3 = 9
// Hole 4 = 22
// Hole 5 = 13
// Hole 6 = 7
// Hole 7 = 16
// Hole 8 = 10
// Hole 9 = 11
// Fish
//
// Hole 1 = 2
// Hole 2 = 2
// Hole 3 = 4
// Hole 4 = 5
// Hole 5 = 4
// Hole 6 = 3
// Hole 7 = 6
// Hole 8 = 4
// Hole 9 = 1
// Extension
//
// Now work out each golfers round compared to the course par.
//
// Par
//
// Hole 1 = 3
// Hole 2 = 4
// Hole 3 = 5
// Hole 4 = 5
// Hole 5 = 3
// Hole 6 = 3
// Hole 7 = 4
// Hole 8 = 3
// Hole 9 = 5
