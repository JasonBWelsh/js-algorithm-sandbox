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
function fizzBuzz() {
  let i = 1;
  while(i <= 100) {
    if(i % 15 === 0) {
      console.log('fizzBuzz');
    } else if(i % 3 === 0) {
      console.log('fizz');
    } else if(i % 5 === 0) {
       console.log('buzz');
    } else {
      console.log(i);
    }
    i++;
  }
}

fizzBuzz();

// console.log("output\n", maxCharacter("verisimilitude"));