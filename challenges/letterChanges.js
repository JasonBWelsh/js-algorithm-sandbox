/*
Change outpu to be each letter passed in + 1
ex: 'hello there' is 'ifmmp uifsf'
*/

// capitalize vowels

function letterChanges(str) {
  let newString = str.toLowerCase().replace(/[a-z]/gi, function (char) {
    if (char === 'z') return 'a';
    return String.fromCharCode(char.charCodeAt() + 1);
  });

  newString = newString.replace(/a|e|i|o|u/gi, function (vowel) {
    return vowel.toUpperCase();
  });

  return newString;
}

console.log(letterChanges('hello there'));
