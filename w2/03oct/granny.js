
console.log('Warmup Week2 Monday');

// prompt for question
var question = prompt("Talk to Granny:");
var vowels = ['a','e','i','o','u'];




// get random year. compare response to uppercase version
grannyTalk = function(){
  var year = Math.floor((Math.random() * 20) + 1930)
    if (question === 'BYE'){
      return 'Whats that honey, I didnt hear you..'
    } else if (question === question.toUpperCase()) {
      return 'NO, NOT SINCE ' + year;
    } else if (question !== question.toUpperCase()) {
      return 'SPEAK UP SONNY JIM';
  }
}


var answer = grannyTalk();
console.log(answer);

grandpaTalk = function(question){
  var question = question.toLowerCase();
  var string2Array = question.split('');
  grannyTalk(person);
  for (i=0; i<=string2Array.length; i++ ) {
    if (string2Array[i] === vowels[0]) {
      string2Array[i] = randVowel();
    }
  }
  return string2Array;
}

randVowel = function () {
  var randVowel = Math.floor(Math.random() * 5)
  return vowels[randVowel];
}




// Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.
// If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"
// If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"
// The year will be a random year between 1930 and 1950.
// If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."
// bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.
// sample output of grandpaTalk:
// // NO NOT SINCE incorrect year // whats that gunny

// SOLUTION

// var grannyTalk = function(message) {
//   if (message === 'BYE') {
//     return 'Whats that honey, I didnt hear you..';
//   } else if (message === message.toUpperCase()){
//     return 'NO, NOT SINCE' + Number(Math.floor(Math.random() * (1950 - 1930)) + 1930);
//   } else {
//     return 'SPEAK UP SONNY JIM';
//   }
// }
//
// var grandpaTalk = function(message) {
//   var askGran = grannyTalk(message);
//
//   if (askGran.includes('NO,')) {
//     return 'NO, NOT SINCE' + Number(Math.floor(Math.random() * (1950 - 1930)) + 1930);
//   }
//
//   var vowels = ['a','e','i','o','u'];
//
//   return askGran.toLowerCase().split('').map(function(e) {
//     return vowels.indexOf(e) !== -1 ? vowels[Math.floor(Math.random() * vowels.length)] : e;
//   }).join('').toUpperCase();
// }
//
// console.log(grannyTalk('BYEEE'));
