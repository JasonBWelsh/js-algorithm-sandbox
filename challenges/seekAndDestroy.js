// function destroyer(arr, ...args) {
//   const survivors = [];

//   for (let num of arr) {
//     if (args.indexOf(num) === -1) {
//       survivors.push(num);
//     }
//   }

//   return survivors;
// }

// solution 2

function destroyer(arr, ...args) {
  return arr.filter((val) => args.includes(val));
}

const targetArray = [1, 2, 1, 3, 1, 1, 3, 2];

console.log(destroyer(targetArray, 2, 3));
