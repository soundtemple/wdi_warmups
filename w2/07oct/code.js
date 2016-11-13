console.log('CODE WARMUP');

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var alphabetArray = alphabet.split('');
var cipher = [];
var decoded = [];
var encoded = [];
var message2Decode = document.getElementById('codeInput').value.toUpperCase();

// var cipher = 'DEFGHIJKLMNOPQRSTUVWXYZABC'
var createCipher = function(shiftParam) {
  var getFirstLetters = 0;
  for (i=0; i<=alphabet.length-1; i++) {
    if (i >= (alphabet.length - shiftParam)) {
      getFirstLetters = alphabet.length;
    }
    cipher[i] = alphabetArray[i + shiftParam - getFirstLetters];
    console.log(alphabetArray[i] + ' = ' + cipher[i]);
  }
}

var cipherShift = function () {
  var domVal = document.getElementById('cipherShift').value;
  var parsedInt = parseInt(domVal,10);
  console.log(parsedInt);
  if (parsedInt<1 || parseInt>25) {
    document.getElementsByClassName('shiftMessage')[0].textContent = "Shift must be >0 and <26"
  } else {
    createCipher(parsedInt);
    document.getElementsByClassName('shiftMessage')[0].textContent = ""
  }
}

var decode = function() {
  message2Decode = document.getElementById('codeInput').value.toUpperCase();
  var input2Array = message2Decode.split('');
  for (i=0; i<=input2Array.length; i++) {
    if (/\w/.test(input2Array[i])) {
      decoded[i] = alphabet[cipher.indexOf(input2Array[i])];
    } else {
      decoded[i] = input2Array[i];
    }
  }
  document.getElementsByClassName('messageResult')[0].textContent = decoded.join('');
  input2Array = [];
  decoded = [];
}

var encode = function() {
  message2Decode = document.getElementById('codeInput').value.toUpperCase();
  var input2Array = message2Decode.split('');
  for (i=0; i<=input2Array.length; i++) {
    if (/\w/.test(input2Array[i])) {
      encoded[i] = cipher[alphabet.indexOf(input2Array[i])];
    } else {
      encoded[i] = input2Array[i];
    }
  }
  document.getElementsByClassName('messageResult')[0].textContent = encoded.join('');
  input2Array = [];
  encoded = [];
}

document.getElementById('decodeGo').addEventListener("click", decode);
document.getElementById('encodeGo').addEventListener("click", encode);
document.getElementById('shiftGo').addEventListener("click", cipherShift);


// WARMUP
// # Quiz - Decode this message!
//
// Write a program to decode this message:
//
// **FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.**
//
// This is a form of cryptography known as the Caesar Cipher. It has a **shift parameter** of **3**.
//
// The alphabet is normally:
//
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
//
// The alphabet with the shift parameter of 3 is now as follows:
//
// DEFGHIJKLMNOPQRSTUVWXYZABC
//
//
//
// ---
// ### Extension:
//
// Write the program to encode plain text into messages.
// ```
// CaesarCipher.encode('TWO SYMBOLS KISSING EACH OTHER')
// ```
//
// ### Extension 2:
//
// Write the program to encode it with any shift parameter.
//
// Send each other secret messages.
