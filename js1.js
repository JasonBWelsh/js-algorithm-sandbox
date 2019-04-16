// Reverse integer passed
// function reverseInt(int) {
//   const revString = int
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   return parseInt(revString) * Math.sign(int);
// }

// Capitalize letters
function CapitalizeLetters(str) {
  const x = str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1));
  return x;
}

// Return max character in string (most common)
// function maxCharacter(str) {
//   return str;
// }

console.log("output\n", CapitalizeLetters("I am a VERY long string to pass"));
