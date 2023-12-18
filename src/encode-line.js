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
  if (str.length === 0) return '';
  const arr = str.match(/(.)\1*/g);
  const res = arr.reduce((acc, currEl) => {
    if (currEl.length > 1) {
      acc += currEl.length + currEl[0];
    } else {
      acc += currEl;
    }
    return acc;
  }, '');
  return res;
}

module.exports = {
  encodeLine
};
