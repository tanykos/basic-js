const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let res = [];
  let count;

  for (let i = 0; i < row; i++) {
    res.push([]);
  }

  const countRow = (iRow, iCol, step = 1) => {
    let iCurr = iCol - 1;
    let sumRow = 0;
    let k = 0;
    while (k < 3) {
      if (matrix[iRow][iCurr + k]) sumRow += Number(matrix[iRow][iCurr + k])
      k += step;
    }
    return sumRow;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      count = 0;
      count += countRow(i, j, 2);
      if (matrix[i - 1]) count += countRow(i - 1, j);
      if (matrix[i + 1]) count += countRow(i + 1, j);
      res[i].push(count);
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
