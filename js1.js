// Reverse integer passed
function reverseInt(int) {
  return parseInt(
    int
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}

console.log("output\n", reverseInt(125));
