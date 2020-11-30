const tail = require('../tail');
const assert = require('chai').assert;

// npm test test/middleTest.js
describe("tail function gets rid of first element", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
    // always fail because it compares array references
    // assert.strictEqual(tail(words), ['Lighthouse', 'Labs']);

    // compare values
    assert.strictEqual(tail(words).join(), ['Lighthouse', 'Labs'].join());
  });
});
