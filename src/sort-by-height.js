const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArr = arr.filter((n) => n > 0).sort((a, b) => a - b);
  let i = 0;

  const res = arr.map((item, index) => {
    if (item > -1) {
      i++;
      return sortedArr[i - 1];
    } else {
      return item;
    }
  });

  return res;
}

module.exports = {
  sortByHeight
};
