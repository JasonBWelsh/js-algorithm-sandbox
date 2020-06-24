/*
  If number is >= 0 return num as a string
  If number is less than 0 return accounting string for negative num ex: (3)
*/

function numberToAccountingString(number) {
  if (number === null) return;
  if (number >= 0) return number.toString();
  return `(${Math.abs(number)})`;
}

console.log(numberToAccountingString(0));
console.log(numberToAccountingString(5));
console.log(numberToAccountingString(-10));
console.log(numberToAccountingString(undefined));
