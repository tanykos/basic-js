const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let currArr = [...arr];
  for (let i = 0; i < currArr.length; i++) {
    switch (currArr[i]) {
      case '--discard-next':
        if (i === currArr.length - 1) {
          currArr.splice(i, 1);
        } else {
          if (currArr[i + 2] === '--double-prev' 
            || currArr[i + 2] === '--discard-prev') currArr.splice(i + 2, 1);
          currArr.splice(i, 2);
        }
        break;
      case '--discard-prev':
        if (i === 0) {
          currArr.splice(i, 1);
        } else {
          currArr.splice(i - 1, 2);
        }
        break;
      case '--double-next':
        if (i === currArr.length - 1) {
          currArr.splice(i, 1);
        } else {
          currArr[i] = currArr[i + 1];
        }
        break;
      case '--double-prev':
        if (i === 0) {
          currArr.splice(i, 1);
        } else {
          currArr[i] = currArr[i - 1];
        }
        break;
    };
  };
  return currArr;
}

module.exports = {
  transform
};
