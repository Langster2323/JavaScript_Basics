var randomNumber = Math.floor(Math.random() * 6) +1;
var guess = prompt("I am thinking of a number between 1 and 6?");
if (parseInt(guess) === randomNumber) {
  document.write("<p>You guessed the number!</p>");
} else {
  document.write("<p>Sorry. The number was " + randomNumber + "</p>");
}
