// Capitalize each letter in phrase

/**
 *
 * @param {string} str - the phrase to be capitalized
 * @returns {string} - the capitalized phrase
 */
function capitalizePhrase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

const phrase = 'I probably eat way too much dark chocolate.';

const output = capitalizePhrase(phrase);

console.log(output);
