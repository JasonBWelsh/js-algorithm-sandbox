// Reverse integer passed
function reverseInt(int) {
  const revString = int
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(revString) * Math.sign(int);
}

console.log("output\n", reverseInt(-125));
