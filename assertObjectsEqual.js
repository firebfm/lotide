const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (key in object1) {
    if (object1[key].isArray === object2[key].isArray) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } 
    }
    return true;
  }
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // able to see object

  if (eqObjects(actual, expected)) {
    console.log(`🍈️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
assertObjectsEqual(ab, ba)

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
assertObjectsEqual(ab, abc)

//

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2)

module.exports = assertObjectsEqual;