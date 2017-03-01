function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}
//Examples of returning a value...
alert(getRandomNumber());
console.log(getRandomNumber());
var dieRoll = getRandomNumber();

//Passing in arguments for the area of a rectangle...
function getArea(width, length, unit) {
  var area = width * length;
  return area + '' + unit;
}
console.log(getArea(10, 20, 'sq ft') );
