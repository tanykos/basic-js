const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let currN = n;

  addLastDigit(n);

  function addLastDigit(newN) {
    const lastDigit = newN % 10;
    sum += lastDigit;
    currN = Math.floor(currN / 10);

    if (currN != 0) {
      addLastDigit(currN);
    } else {
      if (sum > 9) {
        currN = sum;
        sum = 0;
        addLastDigit(currN);
      } else {
        return sum;
      }
    }
  };

  return sum;
}

module.exports = {
  getSumOfDigits
};
