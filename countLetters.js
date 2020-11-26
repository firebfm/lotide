const countLetters = (text) => {
  text = text.split(' ').join('');
  result = {};
  for (let letter of text) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍈️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

result1 = countLetters('zRobot is evil zzz')
console.log(JSON.stringify(result1));
for (let key in result1) {
  console.log(key + ': ' + result1[key])
}
assertEqual(countLetters('Robot'), {R: 1, o: 2, b: 1, t: 1})