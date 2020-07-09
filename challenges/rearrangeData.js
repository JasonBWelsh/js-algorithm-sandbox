/*

1,2,3,4,5,6,7
=
4,5,6,7,3,2,1

*/

function parseArray(array) {
  const arrayMiddleIndex = Math.floor(array.length / 2);

  const arr1 = array.slice(0, arrayMiddleIndex).reverse();
  const arr2 = array.slice(arrayMiddleIndex, array.length);

  return [...arr2, ...arr1];
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(parseArray(arr));
