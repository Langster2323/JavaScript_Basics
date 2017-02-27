/*
The Random Number Guessing Game
Generates a number between 1 and 6
and gives a player two attempts to
guess the number/
*/

// Assume the player didn't guess correect
let correctGuess = false;

// generate random number from 1 to 6
let randomNumber = Math.floor(Math.random() * 6 ) + 1;

let guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/* test to see if player is
1. correct
2. guessed to high
3. guessed to low
*/
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  let guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
  if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
  }
} else if ( parseInt(guess) > randomNumber ) {
   let guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
  if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
  }
}

  // test if player is correct and output response
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}
