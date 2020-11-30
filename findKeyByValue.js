const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍈️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, value) => {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const colour = {
  apple: 'red',
  ocean: 'blue',
  bus: 'yellow',
  tree: 'green',
  sun: 'yellow'
};

assertEqual(findKeyByValue(colour, 'yellow'), 'bus');
assertEqual(findKeyByValue(colour, 'green'), 'tree');
assertEqual(findKeyByValue(colour, 'red'), 'apple');

module.exports = findKeyByValue;