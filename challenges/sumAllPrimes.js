// Pass a number to loop up to and add all of the prime numbers up to that number
// ex: sumAllPrimes(10) = 17

// helper function
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

function sumAllPrimes(ceiling) {
  let total = 0;
  let currentNum = 2;

  while (currentNum <= ceiling) {
    if (isPrime(currentNum)) {
      total += currentNum;
    }
    currentNum += 1;
  }

  return total;
}

console.log(sumAllPrimes(10));
