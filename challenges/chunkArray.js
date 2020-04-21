// arrange passed array into chunks
/**
 * @param {Array} - the array to chunk
 * @param {number} - the chunk length
 * @returns {array} - final chunked array
 */
function chunkArray(arr, len) {
  let chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    let chunk = arr.slice(i, i + len);
    chunkedArr.push(chunk);
    i += len;
  }
  return chunkedArr;
}

const arrToChunk = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const output = chunkArray(arrToChunk, 3);
console.log(output);
