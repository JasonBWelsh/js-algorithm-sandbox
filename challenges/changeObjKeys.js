/* 
  Wrtie a function that takes an object and sets the ke/value to the argument you provide
*/

const o = {
  name: 'Moya',
  age: 6,
  isCuteAf: true,
};

function setObjectKey(obj, key, val) {
  const x = { ...obj };
  const keyToSet = Object.keys(x).filter((val) => val === key);
  x[keyToSet] = val;

  return x;
}

console.log(setObjectKey(o, 'age', 7));
