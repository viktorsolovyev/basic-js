const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let sum = 0;
  let aboveArray;

  matrix.forEach((element, index) => {
    if (index == 0) {
      sum = element.reduce((sum, current) => sum + current);
      aboveArray = element.slice();
    } else {
      element.forEach((el, idx) => {
        if (!aboveArray[idx] == 0) {
          sum += el;
        }
      });
      aboveArray = element.slice();
    }
  });

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
