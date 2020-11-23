const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍈️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  let arr2 = [];
  
  arr2 = arr.slice(1, arr.length);
  return arr2;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
let foo = tail(words);
console.log(foo);