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

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
// assertEqual(eqArrays([1, 2, 3], [1, 3]), false);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
// assertEqual(eqArrays(['dog', 'cat'], ['dog', 'cat']), true);
// assertEqual(eqArrays(['dog', 'cat'], ['dog', 'cat', 'mouse']), false);
// assertEqual(eqArrays(['dog', 'cat'], ['d']), false);

assertArraysEqual(['dog', 'cat'], ['d']);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, '2', 3]);