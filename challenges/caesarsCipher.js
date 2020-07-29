/* 

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let output = '';

  for (let i = 0; i < str.length; i += 1) {
    let charCode = str[i].charCodeAt();

    if (charCode >= 65 && charCode <= 77) {
      output += String.fromCharCode(charCode + 13);
    } else if (charCode <= 90 && charCode >= 78) {
      output += String.fromCharCode(charCode - 13);
    } else {
      output += str[i];
    }
  }

  return output;
}

console.log(rot13('SERR PBQR PNZC'));
console.log(rot13('SERR CVMMN!'));
console.log(rot13('SERR YBIR?'));
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));
