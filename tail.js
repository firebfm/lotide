const tail = (arr) => {
  let arr2 = [];
  
  arr2 = arr.slice(1, arr.length);
  return arr2;
};

// Test cases moved

module.exports = tail;