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
}

const middle = function(arr) {
  let mymid = [];
  if (arr.length <= 2) {
    mymid = [];
  } else {
    if (arr.length % 2 !== 0) {
      mymid.push(arr[Math.floor(arr.length / 2)]);
    } else {
      mymid.push(arr[Math.floor(arr.length / 2) - 1]);
      mymid.push(arr[Math.floor(arr.length / 2)]);
    }
  }
  return mymid;
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // [2]
console.log(middle([1, 2, 3, 4, 5])) // [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // [3,4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);