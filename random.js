function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}
//Examples of returning a value...
alert(getRandomNumber());
console.log(getRandomNumber());
var dieRoll = getRandomNumber();
