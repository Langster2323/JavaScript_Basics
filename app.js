var upper = 10000;
var randomNumber = getRandomNumber(upper);

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
