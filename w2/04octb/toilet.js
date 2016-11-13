console.log('Dont steal my code');

// function bang() {
//   console.log('big bag');
// }

var bang = function() {
  console.log('Big bang');
}

// bang();

// runs 5 secs later.  not function () to run later
// setTimeout(bang, 5000);

var poop = function() {
  console.log('playing with your phone');
  document.body.style.backgroundColor = 'darkolivegreen';
}

var flush = function() {
  document.body.style.backgroundColor = 'green';
}

poopDelay = function() {
  setTimeout(poop, 2000);
}

flushDelay = function() {
  setTimeout(flush, 2000);
}

document.getElementById('butn-poop').addEventListener('click', poopDelay);
// Alternate method.....
// document.getElementById('butn-poop').addEventListener('click', function functionName() {
//   setTimeout(poop, 2000)
// });


document.getElementById('flush').addEventListener('click', flushDelay);
