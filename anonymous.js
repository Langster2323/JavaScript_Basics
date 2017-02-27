//Function expression assigns function to a variable
//Another way to create a function
let alertRandom = function () {
  let randomNumber = Math.floor(Math.random() * 6 ) + 1;
  alert(randomNumber);
};
alertRandom();
