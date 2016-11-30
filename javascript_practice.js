const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 99.99;
const TAX_RATE = 0.08;
const SPENDING_THRESHOLD = 250;

var bank_balance = 500.14;
var amount = 0;

function calculateFinalPurchaseAmount(amt) {
  amt = amt + (amt * TAX_RATE);

  return amt;
}
function printAmount() {
  console.log( amount.toFixed(2));
}

var amount = 99.99;

printAmount();

amount = amount * 2;

printAmount();
var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);
console.log(amount.toFixed(2)); // final result
