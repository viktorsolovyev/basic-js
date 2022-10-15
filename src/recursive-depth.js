const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let totalDepth = 1;

    arr.forEach((element) => {
      let depth = 1;
      if (Array.isArray(element)) {
        depth += this.calculateDepth(element);
      }
      if (depth > totalDepth) totalDepth = depth;
    });

    return totalDepth;
  }
}

module.exports = {
  DepthCalculator
};
