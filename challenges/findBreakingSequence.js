// if number sequence does not increase by one print missing number

function findBreakingSequence(sequence) {
  let missing = [];

  sequence.forEach((num, index) => {
    let nextVal = sequence[index + 1];
    if (nextVal !== num + 1 && num !== sequence[sequence.length - 1]) {
      missing.push(num + 1);
    }
  });

  if (missing.length === 0) return 'sequence is correct';
  if (missing.length === 1) return missing[0];
  return missing;
}

console.log(findBreakingSequence([1, 2, 3, 4, 5]));
console.log(findBreakingSequence([1, 2, 4, 5]));
console.log(findBreakingSequence([1, 2, 4, 5, 7]));
