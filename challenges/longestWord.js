// Find longest word in sentence

/**
 * @param {string} - sentence to find longest word
 * @returns {string} || {array} - return longest word as string if only one
 * else return aray of words if multiple have same length
 */
function findLongestWord(str) {
  const words = str.toLowerCase().match(/[a-zA-Z]+/g);

  const sorted = words.sort((a, b) => b.length - a.length);

  const longest = sorted.filter((word) => word.length === sorted[0].length);

  return longest.length === 1 ? longest[0] : longest;
}

const sen = 'I am the sentence to find the longest word have patience';
const output = findLongestWord(sen);
console.log(output);
