const { NotImplementedError } = require('../extensions/index.js')

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
  let numbers = []
  let nArr = String(n).split('')
  for (let i = 0; i < nArr.length; i++) {
    let arr = [...nArr]
    arr.splice(i, 1)
    numbers.push(+arr.join(''))
  }
  return Math.max(...numbers)
}

module.exports = {
  deleteDigit,
}
