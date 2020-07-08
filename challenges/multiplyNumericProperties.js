/*

Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

*/

function multiplyNumeric(obj) {
  const multipliedNumericObject = {};

  for (let key in obj) {
    if (!isNaN(obj[key])) {
      multipliedNumericObject[key] = obj[key] * 2;
    }
  }

  return multipliedNumericObject;
}

const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

console.log(multiplyNumeric(menu));
