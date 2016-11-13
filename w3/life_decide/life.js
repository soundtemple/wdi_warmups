console.log('WU3.1 Life Decider');

var heads = 0;
var tails = 0;
var tally = '';
var headWins = 0;
var tailWins = 0;

function coinFlip() {
  updateScores();
  document.getElementById('winner').textContent = '';
  result = Math.floor((Math.random() * 2));
  if (result === 0) {
    tally = 'HEADS!'
    tallyDisplay();
    heads += 1;
    updateScores();
    if (heads >= 5) {
      tally = "Winner is HEADS!" + " Score: " + heads + " to " + tails;
      tallyDisplay();
      headWins += 1;
      resetGame();
    }
  } else {
    tally = 'TAILS!'
    tallyDisplay();
    tails += 1;
    updateScores();
    if (tails >= 5) {
      tally = "Winner is TAILS!" + " Score: " + tails + " to " + heads;
      tallyDisplay();
      tailWins += 1;
      resetGame();
    }
  }
}

function updateScores() {
  document.getElementById("headsScore").textContent = "Heads: " + heads;
  document.getElementById("tailsScore").textContent = "Tails: " + tails;
}

function resetGame() {
  heads = 0;
  tails = 0;
  tally = [];
  tallyCount = 0;
  document.getElementById("headsWinsTotal").textContent = "Heads Total: " + headWins;
  document.getElementById("tailsWinsTotal").textContent = "Tails Total: " + tailWins;
}

function tallyDisplay() {
  var newItem = document.createElement("LI");       // Create a <li> node
  var textnode = document.createTextNode(tally);  // Create a text node
  newItem.appendChild(textnode);                    // Append the text to <li>
  var list = document.getElementById("tally");    // Get the <ul> element to insert a new node
  list.insertBefore(newItem, list.childNodes[0]);  // Insert <li> before the first child of <ul>
}

document.getElementById('headsOrTails').addEventListener("click", coinFlip);
