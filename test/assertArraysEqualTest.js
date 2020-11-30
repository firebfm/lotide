const assertArraysEqual = require('../assertArraysEqual');
// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');

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