// Flatten array
/**
 * @param {array} - two dimensional array to flatten
 * @returns {array}
 */
function flattenArray(array) {
  return array.reduce((acc, chunk) => [...acc, ...chunk], []);
}
const twoDimensionalArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10, 11],
  [12, 13, 14],
];
const output = flattenArray(twoDimensionalArray);
console.log(output);
