// Return max character from string

/**
 * @param {string}
 * @returns {object} - max haracter as key and num of instances as value
 */
function findMaxChar(str) {
  let charMap = {};
  let maxChar = '';
  let maxNum = 0;
  const regex = /[a-zA-Z]+/g;
  const strWithoutSpace = str.match(regex).join('').split('');
  strWithoutSpace.forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return { [maxChar]: maxNum };
}
const phrase =
  'This is the phrase I am going to use to find the max character.';
const output = findMaxChar(phrase);
console.log(output);
