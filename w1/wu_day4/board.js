console.log('Warmup Day4');

var boardWidth = 16;
var boardHeight = 8;
var symbol = '#';
var altSymbol = ' ';


var board = [];
var i = 0;
var h = 0;
for(h=0; h<=boardHeight; h++) {
 for(w=0; w<=boardWidth; w++) {
   if ( w%2 === 0) {
    board.push(altSymbol);
 } else if (w%2 !== 0) {
    board.push(symbol);
 }
 }
   board.push('\n');
   if (h%2 === 0) {
     symbol = ' '
     altSymbol = '#'
   } else {
     symbol = '#';
     altSymbol = ' ';
   }
}


console.log(board.join(''));


// SOLUTION
// var size = 8;
// var symbol = '#';
// var board = '';
//
// for (var y = 0; y < size; y++) {
//   for (var x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0)
//       board += ' ';
//     else
//       board += symbol;
//   }
//   board += '\n';
// }
//
// console.log(board);
