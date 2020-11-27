const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍈️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"

ab = {a:2, b:4, c:8, d:9, e:14, f:20};

assertEqual(findKey(ab, x => x % 3 === 0), 'd')

cd = {blue: 'pants', green: 'shirt', red: 'shirt', orange: 'shoes'}
assertEqual(findKey(cd, x => x === 'bed'), undefined)
assertEqual(findKey(cd, x => x === 'shirt'), 'green')