const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

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

assertArraysEqual(map(['dog', 'cat'], word => word[1]), ['o', 'a']);
assertArraysEqual(map([1, 2, 3], num => num * 2), [2, 4, 6]);
assertArraysEqual(map([4, 6, 20], num => num + 20), [24, 26, 40]);