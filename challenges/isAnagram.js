// pass two strings
// return true if anagram fasle if not
// strip special chars
// below === elbow
// dormitory === dirty room##

/**
 * @param {string}
 * @param {string}
 * @returns {boolean}
 */
function isAnagram(str1, str2) {
  const x = stringProcessor(str1);
  const y = stringProcessor(str2);
  return x === y;
}

function stringProcessor(str) {
  const regex = /[a-zA-Z]+/g;
  return str.toLowerCase().match(regex).join('').split('').sort().join('');
}

const arg1 = 'dirty room##';
const arg2 = 'dormitory';
const output = isAnagram(arg1, arg2);
console.log(output);
