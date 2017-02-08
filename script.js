/* A JavaScript statement*/
//This will execute on the screen..
var visitor = prompt("What is your name?")
//String concatenation...
var message = "Hello " + visitor + ". Welcome to my site.";
message += " We are so glad that you came by to visit, ";
message += visitor;
message += ". Please come again when you wnat to learn some more.";
document.write(message)
//Used property called length...
console.log(message.length);
//Document represents the current webpage...
//Write is a command that writes a message to the page...
document.write("<h1>Welcome to Javascript Basics</h1>");
//outputs messages to the console...
console.log("Program complete, you're reviewing a lot!");

/**** Numbers ****/

var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day');
var yearsAlive = secondsPerDay * minsPerHour * hoursPerDay * daysPerWeek *
weeksPerYear;
