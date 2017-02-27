let correctGuess = false;
let randomNumber = Math.floor(Math.random() * 6 ) + 1;
let guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
}

if (correctGuess===true) {
  document.write('<p>You guessed the number!</p>');
} else {
  document.write('<p>Sorry. THe number was ' + randomNumber + '.</p>');
}
