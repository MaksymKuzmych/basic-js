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
  const newArr = JSON.parse(JSON.stringify(matrix));
  const resArr = [];

  newArr.forEach((el1, idx1) => {
    el1.forEach((el2, idx2) => {
      newArr[idx1][idx2] = 0;
    });
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == true) {
        newArr[i][j + 1]++;
        newArr[i][j - 1]++;
        newArr[i + 1][j]++;
        newArr[i + 1][j + 1]++;
        newArr[i + 1][j - 1]++;
        if (i != 0) {
          newArr[i - 1][j]++;
          newArr[i - 1][j + 1]++;
          newArr[i - 1][j - 1]++;
        }
      }
    }
  }

  newArr.forEach((el, idx) => {
    resArr.push(newArr[idx].slice(0, 3));
  });

  return resArr;
}

module.exports = {
  minesweeper,
};
