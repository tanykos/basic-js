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
  let max = Number(n.toString().slice(1));
  let arrN = n.toString().split("").map((n) => {
    return Number(n)
  });

  for (let i = 1; i < arrN.length; i++) {
    let arr = [...arrN];
    arr.splice(i, 1);
    const currN = Number(arr.join(''));
    if (currN > max) max = currN;
  };

  return max;
}

module.exports = {
  deleteDigit
};
