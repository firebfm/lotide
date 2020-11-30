const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(['dog', 'cat'], ['dog', 'cat']), true);
assertEqual(eqArrays(['dog', 'cat'], ['dog', 'cat', 'mouse']), false);
assertEqual(eqArrays(['dog', 'cat'], ['d']), false);