const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
  calculateDepth(arr, depth = 1) {
    let resDepth = depth;

    for (let item of arr) {
      if (Array.isArray(item)) {
        let currentDepth = this.calculateDepth(item, depth + 1);
        resDepth = Math.max(resDepth, currentDepth);
      }
    }

    return resDepth;
  }
}

module.exports = {
  DepthCalculator
};
