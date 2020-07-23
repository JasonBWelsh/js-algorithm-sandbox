// Some people are standing in a row in a park. There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving
// the trees.

//For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

const data = [-1, 150, 190, 170, -1, -1, 160, 180];

// helper function
function getIndexOfTrees(data) {
  const treeIndices = [];

  data.forEach((val, index) => {
    if (val === -1) {
      treeIndices.push(index);
    }
  });

  return treeIndices;
}

function sortByHeight(data) {
  const treeIndices = getIndexOfTrees(data);
  const sortedHeights = data.filter((val) => val !== -1).sort();

  treeIndices.forEach((val, index) => {
    sortedHeights.splice(treeIndices[index], 0, -1);
  });

  return sortedHeights;
}

console.log(sortByHeight(data));
