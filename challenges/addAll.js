// return a sum of all parameters entered regardless of the amount of paramaters - NO ARRRAYS
// ex: addAll(2,5,6,7) = 20

function addAll(...args) {
  return args.reduce((total, number) => total + number, 0);
}

console.log(addAll(2, 5, 6, 7));
