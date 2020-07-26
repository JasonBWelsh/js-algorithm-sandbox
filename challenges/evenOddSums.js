// Take in an array and return an array
// of the sums of even and odd numbers
// ex: [50, 60, 60, 45, 71] == [170, 116]

function evenOddSums(arr) {
  let evenTotal = 0;
  let oddTotal = 0;
  const output = [];

  arr.forEach((num) => {
    if (num % 2 === 0) {
      evenTotal += num;
    } else {
      oddTotal += num;
    }
  });

  output.push(evenTotal, oddTotal);

  return output;
}

console.log(evenOddSums([50, 60, 60, 45, 71]));
