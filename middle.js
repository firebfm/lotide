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

module.exports = middle;