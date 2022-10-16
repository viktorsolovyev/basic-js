const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {

  let maxNumber = 0;
  let stringNumber = String(n);

  for (let i = 0; i < stringNumber.length; i++) {

      let leftPart = stringNumber.slice(0, i);
      let rightPart = stringNumber.slice(i+1);
      let tempNumber = Number(leftPart + rightPart);

      if (tempNumber > maxNumber) maxNumber = tempNumber;
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
