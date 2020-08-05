/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. 

*/

function sumAll(arr) {
  const sortedArgs = arr.sort((a, b) => a - b);
  const [lowestNum, highestNum] = sortedArgs;
  const betweenNums = [];

  if (lowestNum + 1 !== highestNum) {
    for (let i = lowestNum + 1; i < highestNum; i += 1) {
      betweenNums.push(i);
    }
  }

  const totalNums = [lowestNum, ...betweenNums, highestNum];

  return totalNums.reduce((total, num) => total + num, 0);
}

console.log(sumAll([1, 4]));
