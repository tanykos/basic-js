const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const matrixFlat = matrix.flat().reduce((acc, currVal) => {
    acc += currVal === '^^' ? 1 : 0;
    return acc;
  }, 0);
  return matrixFlat;
}

module.exports = {
  countCats
};
