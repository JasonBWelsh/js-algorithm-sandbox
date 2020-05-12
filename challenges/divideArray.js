// divide array in half
// if uneven length round up
// return both arrays in an array

/**
 *
 * @param {Array} array
 * @returns {Array} - Array contianing both splits of the array param
 */
function divideArray(array) {
  const splitLength = Math.ceil(array.length / 2);

  const x = array.slice(0, splitLength);
  const y = array.slice(splitLength, array.length);

  return [x, y];
}

console.log(divideArray([1, 2, 3, 4, 5, 6]));
console.log(divideArray([1, 2, 3, 4, 5, 6, 7]));
