/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, ins) {
  const sortedArr = arr.sort((a, b) => a - b);

  if (sortedArr.length === 0) {
    sortedArr.push(ins);
    return sortedArr.indexOf(ins);
  }

  for (let i = 0; i < sortedArr.length; i += 1) {
    if (sortedArr[i] === sortedArr[sortedArr.length - 1]) {
      sortedArr.push(ins);
      break;
    }

    let nextVal = sortedArr[i + 1];

    if (ins > sortedArr[i] && ins < nextVal) {
      sortedArr.splice(i + 1, 0, ins);
      break;
    }
  }
  return sortedArr.indexOf(ins);
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));
