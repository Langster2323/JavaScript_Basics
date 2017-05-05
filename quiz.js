// let answer = prompt("What programming language is the name of a gem?")
// if ( answer.toUpperCase() === 'RUBY' ) {
//   document.write("<p>That's right!</p>");
// } else {
//   document.write("<p>Sorry, that's wrong.</p>");
// }

var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
  var outputDiv = document.getElementById('output');
 outputDiv.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  }
}

html = "You got " + correctAnswers + " question(s) right."
print(html);
