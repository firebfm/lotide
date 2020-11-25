const without = (source, itemsToRemove) => {
  let arr3 = source;
  for (let i = 0; i < arr3.length; i++) {
    for (let item of itemsToRemove) {
      if (arr3[i] === item) {
        arr3.splice(i, 1);
      }
    }
  }
  return arr3;
}

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
    console.log(`🍈️ Assertion Passed: ${arr1} is ${arr2}`)
  } else {
    console.log(`🛑️ Assertion Failed: ${arr1} is not ${arr2}`);
  }
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

let test1 = ['dude', 'boy', 'foo', 'bar'];
let test2 = ['dude', 'foo'];
console.log(without(test1, test2));