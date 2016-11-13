console.log('clock');

var d = new Date();
var hourHand = d.getHours();
var minuteHand = d.getMinutes();
var secondHand = d.getSeconds();

// Set number of miliseconds to a second.
// Lower number makes time go faster
var timeX = 1000;


function startTime() {
    seconds = setInterval(incrementS, timeX);
}

function incrementS() {
    secondHand+=1;
    if (secondHand >= 60) {
      secondHand = 0;
      minuteHand+=1;
    };
    if (minuteHand >= 60) {
      minuteHand = 0;
      hourHand+=1;
    };
    if (hourHand >= 24) {
      hourHand = 0;
    };
    // Update digital clock
    $('.sec').text(secondHand);
    $('.min').text(minuteHand);
    $('.hour').text(hourHand);

    // Update Analog Clock
    $('.clockSecs').css({ WebkitTransform: 'rotate(' + secondHand*6 + 'deg)'});
    $('.clockMins').css({ WebkitTransform: 'rotate(' + minuteHand*6 + 'deg)'});
    $('.clockHrs').css({ WebkitTransform: 'rotate(' + hourHand*30 + 'deg)'});

    // Analog clock numbers
    $('.clockSecs').find("p:first").text(secondHand);
    $('.clockMins').find("p:first").text(minuteHand);
    $('.clockHrs').find("p:first").text(hourHand);

    // Analog clock numbers anti-rotate
    $('.clockSecs').find("p:first").css({ WebkitTransform: 'rotate(' + secondHand*-6 + 'deg)'});
    $('.clockMins').find("p:first").css({ WebkitTransform: 'rotate(' + minuteHand*-6 + 'deg)'});
    $('.clockHrs').find("p:first").css({ WebkitTransform: 'rotate(' + hourHand*-30 + 'deg)'});

}



startTime();



// seconds();

// #### Learning Objectives
// - Practice using jQuery to manipulate the DOM
// - Practice using JavaScript Timers
// - Practice using internal JavaScript Objects
//
// # Clocks!!!!
// ##### cue Coldplay
//
// Today you are going to build a clock!
//
// Start by planning! Draw a clock, break down the problem,
//
// ### Step 1
// Define 3 variables and grab the associated element from the DOM using jQuery:
// - minuteHand
// - secondHand
// - hourHand
//
// ### Step 2
// - Using setInterval and jQuery make the second hand make a full rotation in 60 seconds.
// - You will have to utilize the css attribute `transform - rotate`.
//
// ### Step 3
// - Make the minute hand make a full rotation in 1 hour
//
// ### Step 3
// - Make the hour hand make a full rotation in 24 hours
//
// ### BONUS
// - Sync up your clock with the current time.
// - Take a look at the JavaScript `Date` object
