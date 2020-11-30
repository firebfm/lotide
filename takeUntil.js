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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🍈️ Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑️ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const takeUntil = function(result, callback) {
  const resultArray = [];
  for (let num of result) {
    if (callback(num)) {
      break;
    } else {
      resultArray.push(num);
    }
  }
  return resultArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(['dog', 'cat', 'apple', 'orange', 'pear', 'brain'], x => x[1] === 'r'), ['dog', 'cat', 'apple']);
assertArraysEqual(takeUntil([1, 2, 3, 4, 5, 7, 11, 12, 14], x => x % 4 === 0), [1, 2, 3]);

module.exports = takeUntil;