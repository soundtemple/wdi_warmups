console.log('FOOL!');

var map = [];
var row = [];


function makeFakeMap(x,y,treasure, forestsize, forestChar) {
  var rndX = Math.floor((Math.random() * 5));
  var rndY = Math.floor((Math.random() * 5));
  console.log('x is ' + rndX + ' y is ' + rndY);
  for (var i=0; i<x; i++) {
    row.push('A');
  }
  row.push('\n') // add line break at end of row
  for (var n=0; n<y; n++) {
    map.push(row.slice()); //push a copy of the row object to get unique values.  otherwise javascript uses same address for row instead of creating new row arrays
  }
  map[rndY][rndX] = treasure; // place treasure
  console.log(map.toString());
};
makeFakeMap(5,5,'F',2,'X');

// console.table(map) to see a table in the CONSOLE
// \n  = new line







// # Time to fool some archaeologists
//
// You are a villain trying to trap an adventuring archaeologist. Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.
//
// ```javascript
//
// makeFakeMap(5, 5);
//
// // Sample outputs:
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","X","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];
//
// makeFakeMap(5, 5);
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","X"],
// ["A","A","A","A","A"]
// ];
//
// makeFakeMap(5, 5);
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","X","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];
//
// ```
//
// ### Bonus 1
//
// Modify your function to take a third key argument and generate maps with a single key character inserted randomly.
//
// ```javascript
//
// //bonus output:
//
// makeFakeMap(5, 5, 'F');
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","F","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];
//
// ```
//
//
// ### Bonus 2
//
// Modify your function to generate maps with 'regions' that you can control. The regions you should support are below:
//
// F: generate a forest
// W: generate a body of water
// D: generate a desert region
//
// The argument after the region should be the size of that region. For example, region size 2 would make a 2x2 region within your map (placed randomly) __in which one of the tiles is the treasure marker, X__. Inspect the sample output below. The Region size argument should not be allowed to be bigger than the map itself.
//
// ```javascript
//
// //bonus 2 output:
//
// makeFakeMap(5, 5, 'F', 2, 'X');
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","F","X","A"],
// ["A","A","F","F","A"],
// ["A","A","A","A","A"]
// ];
//
// ```
