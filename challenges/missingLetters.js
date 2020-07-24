// Missing Letters
// Find the missing letter in the passed letter range and return it
// If no letters are missing return undefined.
// abce (Which should return d)
// bcd (which should return undefined)
// abcdefghjklmno (which should return i)
// yz (which should return undefined)

// helper function
function getCharCodes(str) {
  const charCodes = [];
  for (let i = 0; i < str.length; i += 1) {
    charCodes.push(str.charCodeAt(i));
  }

  return charCodes;
}

function missingLetters(letters) {
  // get array of char codes
  const charCodes = getCharCodes(letters);
  let missingChar;

  for (let i = 1; i < charCodes.length; i += 1) {
    let prevNum = charCodes[i - 1];
    if (charCodes[i] !== prevNum + 1) {
      missingChar = charCodes[i];
      break;
    }
  }

  return missingChar ? String.fromCharCode(missingChar - 1) : undefined;
}

console.log(missingLetters('abce'));
console.log(missingLetters('bcd'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('yz'));

console.log(missingLetters('abcdefg'));
