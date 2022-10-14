const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0
  matrix.forEach((el1, idx1) => {
    if (idx1 == 0) {
      sum = el1.reduce((acc, el2) => acc + el2)
    } else {
      el1.forEach((el3, idx3) => {
        if (matrix[idx1 - 1][idx3] != 0) {
          sum += el3
        }
      })
    }
  })
  return sum
}

module.exports = {
  getMatrixElementsSum,
}
