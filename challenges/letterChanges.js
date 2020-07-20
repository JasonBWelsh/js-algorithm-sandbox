/*
Change outpu to be each letter passed in + 1
ex: 'hello there' is 'ifmmp uifsf'
*/

function letterChanges(str) {
  const newString = str.toLowerCase().replace(/[a-z]/gi, function (char) {
    if (char === 'z') return 'a';
    return String.fromCharCode(char.charCodeAt() + 1);
  });

  return newString;
}

console.log(letterChanges('hello there'));
