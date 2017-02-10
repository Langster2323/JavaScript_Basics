var input = prompt("Please pick a number! ");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * topNumber) + 1;
var message = "<p>" + randomNumber + "is a number between 1 and " +
topNumber + "</p>"
document.write(message)
