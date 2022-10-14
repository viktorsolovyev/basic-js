const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");

  let wasDiscarded = false;

  let transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i++;
      wasDiscarded = true;
    } else if (arr[i] == "--discard-prev") {
      if (!wasDiscarded) {
        transformedArray.pop();
      }
    } else if (arr[i] == "--double-next") {
      if (i + 1 < arr.length) {
        transformedArray.push(arr[i + 1]);
        wasDiscarded = false;
      }
    } else if (arr[i] == "--double-prev") {
      if (!wasDiscarded && i - 1 >= 0) {
        transformedArray.push(arr[i - 1]);
      }
      wasDiscarded = false;
    } else {
      transformedArray.push(arr[i]);
    }
  }
  return transformedArray;
}

module.exports = {
  transform
};
