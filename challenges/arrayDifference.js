/* 
  implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.
*/

function arrayDiff(a, b) {
  if (b.length === 0) return a;
  const c = [...new Set(b)];
  const output = [];
  c.forEach((item) => {
    for (let i = 0; i < a.length; i += 1) {
      if (item !== a[i]) output.push(a[i]);
    }
  });

  return output;
}

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
