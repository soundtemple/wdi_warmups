console.log('palCheck checker');


function palCheck(input) {
  var word2Check = input.split("").join("").toLowerCase().replace(/ /g,"").replace(/[`~!@#$%^&*()_+-={}]/g,"");
  var revWord = word2Check.split("").reverse().join("");
  if (word2Check === revWord) {
    return console.log(input + ' ---- YES a PALINDROME!');
  }
  return console.log(input + ' ---- NOOOOOOOOOO! NOT a PALINDROME!');
}


palCheck('abcdefggfedcba');
palCheck('A car, a man, a maraca');
palCheck('A Santa at Nasa');
palCheck('Able was I ere I saw Elba');
palCheck('Air an aria');
palCheck('Anna');
palCheck('Remark not on Kramer')
palCheck('Remar$$$k not on Kra&mer')
palCheck('Rassemar$$$k not on Kra&mer')
