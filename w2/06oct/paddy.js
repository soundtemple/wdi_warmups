
var round = 1;

var reply = function(getQuestion) {
  if (round >= 2) {
    document.getElementsByClassName('reply')[0].innerHTML = "<p>Look, Leprechaun!</p>";
    round = 1;
    return;
  }
  if(getQuestion.includes("Patricks")) {
    document.getElementsByClassName('reply')[0].innerHTML = "<p>tildlely de, potatoes</p>";
    return;
  }
  if(getQuestion.includes("Guiness")) {
    document.getElementsByClassName('reply')[0].innerHTML = "<p>Just the luck of the Irish.</p>";
    return;
  }
  if(getQuestion.includes("ROUND")) {
    round += 1
    document.getElementsByClassName('reply')[0].innerHTML = "<p>Whats that laddy?</p>";
  } else {
    document.getElementsByClassName('reply')[0].innerHTML = "<p>Ay, you're not makin' any sense laddy. I think you've had a few tooo many</p>";
    return;
  }
}

var getQuestion = function() {
  var question = document.getElementById('question').value;
  reply(question);
}

document.getElementById('askIt').addEventListener('click', function() {
  getQuestion();
});





console.log('ask...');
console.log('Happy St Patricks Day');
console.log('Do you want a pint of Guinness');
console.log('Paddy, its your ROUND');





// <!-- Paddy
// You're out enjoying a few green beers when you bump into Paddy in a bar. Write a JS program in paddy.js that takes input from an id='question' input box and returns Paddy's reply in a new <div>
//
// Say 'Happy St Patrick's' and Paddy replies 'tildlely de, potatoes'
//
// Ask him 'Do you want a pint of Guinness?' Paddy's had a pint or two and the Irish band is really loud so you might need to shout twice and he'll reply 'Just the luck of the Irish.'
//
// Then say to him 'Paddy, it's your round.' and he'll reply 'Look, Leprechaun!' -->
