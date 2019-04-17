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
// function CapitalizeLetters(str) {
//   const x = str
//     .toLowerCase()
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.substring(1));
//   return x;
// }

// Return max character in string (most common)
// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = '';

//   str.split('').forEach(function(char) {
//     if(charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });

//   for(let char in charMap) {
//     if(charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }

//   return {[maxChar]: maxNum};
// }



// FIZZBUZZ
// function fizzBuzz() {
//   let i = 1;
//   while(i <= 100) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzBuzz');
//     } else if(i % 3 === 0) {
//       console.log('fizz');
//     } else if(i % 5 === 0) {
//        console.log('buzz');
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }

// Find longest word 
function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArr.sort(function(a, b) {
    return b.length - a.length;
  });
  const longest = sorted.filter(word => word.length >= sorted[0].length);

  return longest.length > 1 ? longest : longest[0];
}

console.log("output:::^~^~^~^~^~^~^~\n", longestWord("Which word,, is the longest?"));
