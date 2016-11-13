console.log('WU4.1 Museum');

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

function treasureFinder(map2Check, key){
  var x = 0;
  var y = 0;

  var arrays2Check = map2Check.length - 1;
  for (var i=0; i<=arrays2Check; i++) {
    var thisArrayLength = map2Check[i].length - 1;
    for (var n=0; n<=thisArrayLength; n++) {
      if (map2Check[i][n] === key) {
        // console.log('looking at ' + map2Check[i][x]);
        x = n;
        y = i;
      }
    }
  }
  console.log('XY Co-ordinates are  Row: ' + y + ' Element: ' + x );
};

treasureFinder(map1, 'X');
treasureFinder(map2, 'X');
treasureFinder(map3, 'X');
treasureFinder(map4, 'X');
treasureFinder(holyGrailMap, 'G')



// # [It belongs in a museum!](https://www.youtube.com/watch?v=-abUtRbUS_U)
//
// You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below) and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:
//
// ```javascript
// var map1 = [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","X","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];
//
// // Sample output:
//
// treasureFinder(map1) // should return [2, 2];
// ```
// You can assume that the size of the treasure map will be the same.
//
// ### Some additional maps:
//
// ```javascript
//
// var map2 = [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","X","A","A","A"]
// ];
//
// var map3 = [
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","V","A"],
// ["v","v","V","v","X"],
// ["A","V","A","A","A"]
// ];
//
// var map4 = [
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","V","A"],
// ["v","v","V","v","A"],
// ["X","V","A","A","A"]
// ];
//
// ```
//
// ### Bonus:
//
// Modify your function to accept maps of any size, and to accept a second argument for the key to look for. It should also handle non-unique 'key' values gracefully.
//
// ```javascript
// var holyGrailMap = [
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","V","v","S","S"],
// ["v","v","G","v","S","S"],
// ["v","v","H","v","S","S"],
// ["v","v","V","v","S","S"],
// ["A","V","A","A","A","S"]
// ];
//
// //sample outputs:
//
// treasureFinder(holyGrailMap, "G") // should return [4, 2];
// treasureFinder(holyGrailMap, "H") // should return [5, 2];
// treasureFinder(holyGrailMap, "H") // should return [5, 2];
//
// treasureFinder(holyGrailMap, "V") // should return 'that doesnt belong in a museum!';
// ```
