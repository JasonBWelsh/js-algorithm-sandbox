function findMaxChar(str) {
  const charMap = {};
  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] && /^[a-z0-9]+$/i.test(str[i])
      ? charMap[str[i]]++
      : (charMap[str[i]] = 1);
  }
  return charMap;
}
console.log(findMaxChar("This is the string I am using for Ryan's challenge."));

// find max char in string
// use only one loop
// half as many lines of code
// no splits
// no joins
// Handles any characters, not just English letters.
// Doesn't count hidden stuff like new lines
// Plays nice with invalid input.
// still readable

// x ? y = x : y = 1
// y = x ? x : 1

// x =
