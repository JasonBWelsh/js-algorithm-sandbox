// Find highest and lowest number in array without using pre-built functions like Math.Max()

const nums = [
  39,
  14,
  59,
  10,
  46,
  33,
  74,
  467,
  1812,
  6,
  93,
  58,
  26,
  85,
  36,
  98,
  3,
];

/**
 *
 * @param {Array} arr
 * @returns {Object} - object containing min and max nums as properties
 */
function findMaxNum(arr) {
  let output = {
    min: arr[0],
    max: arr[0],
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < output.min) {
      output.min = arr[i];
    }
    if (arr[i] > output.max) {
      output.max = arr[i];
    }
  }

  return output;
}

console.log(findMaxNum(nums));
