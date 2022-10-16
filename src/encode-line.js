const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = "";

  let currentCount = 1;
  let currentChar = str[0];

  for (i = 1; i < str.length; i++) {
    if (currentChar == str[i]) {
      currentCount++;
    } else {
      result += currentCount == 1 ? currentChar : currentCount + currentChar;
      currentChar = str[i];
      currentCount = 1;
    }
    if (i == str.length - 1) {
      result += currentCount == 1 ? currentChar : currentCount + currentChar;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
