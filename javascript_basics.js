a = 21;
b = a * /* arthmetic expressions */2; /* assignment expression */
/* viewed on the developer tools console */console.log(b); /*42*/
alert(b);
/*
 A brief example of a output, arthmetic, assignment,
 literal and variable expressions.
*/

age = prompt("Please enter your age:");
console.log(age);
// A brief example of a users input

var/* variable expression */ a = 20;
a = a + 1;
a = a * 2;
// A brief example of a variable being declared

"I am a string";
"I am also a string";
// Showing examples of strings

42/* literal expression */;
// Showing a example about literal expressions

true;
false;
//Showing examples of booleans

var a = "42";
var b = Number(a);

console.log(a);
console.log(b);

var c = "76";
var d = Number(d);

console.log(c);
console.log(d);
//Converting between types

var amount = 99.99;

// a general block
{
  amount = amount * 2;
  console.log(amount); //199.98


//convert amount to a string, and
// add "$" on the beginning
  amount = "$" + String(amount);

  console.log(amount);
} // I can wrap more than one statement if need be
/* const is a new way to declare a constant,
instead of var*/
const TAX_RATE /* TAX_RATE is a constant,
but only by convention. I'm using,
as an example in a assignment expression */= 0.08; // 8% sales tax

var amount = 99.99;

amount = amount * 2;

amount = amount + (amount * TAX_RATE);

console.log(amount); // 215.9784
console.log(amount.toFixed(2)); // "215.98"
/* toFixed lets me specify how many decmal places
I'd like the number rounded to,
and produces the string as necessary. */

var amount = 99.99;
// is amount big enough?
if (amount > 10) {      // <-- black attached to 'if'
  amount = amount * 2;
  console.log(amount);  /*statement passes only if,
  if statement is true*/
} /* A block statement doesn't need
a semicolon to conclude it */

var bank_balance = 302.13;
var amount = 99.99
/* if statement requires an expression in between
the parentheses that can be treated as either
true or false */
if (amount < bank_balance) {
  console.log("I want to buy this phone!");
}
