console.log('pooh!');

var jars = [],
    pass = 1

function createJars(num){
  for (var i=0; i<100; i++ ){
  jars[i] = 0;
  }
  console.log(jars);
}

createJars(100)

function doTheRounds() {
  for (var i=1; i<=100; i++){
    pass = i;
    visitJars(pass);
  }
  console.log(jars);
  console.log(pass);
}

function visitJars() {
  for (var i=(pass-1); i<100; i+=pass){
    if (jars[i] == 0) {
      jars[i] = 1;
    } else {
      jars[i] = 0;
    }
  }
}


jars_ans = [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];


function checkAnswer() {
  jars_ans.forEach(function(item, index){
    if (jars_ans[index] == jars[index]){
      console.log('true');
    } else {
      console.log('false');
    }
  })
}

// Winnie the Pooh's Honey Problem
//
// Problem: You have 100 jars of honey in a row that are all initially closed. You make 100 visits to each jar of honey.
//
// The first time around, you visit every jar and toggle the lid (if the jar is closed, you open it; if it is open, you close it).
//
// The second time you only visit every 2nd jar of honey (jar #2, #4, #6, ...). The third time, every 3rd jar of honey (har #3, #6, #9, ...), etc, until you only visit the 100th jar of honey.
//
// Question: What state are the jars of honey in after Pooh's last pass? Which are open, which are closed?
