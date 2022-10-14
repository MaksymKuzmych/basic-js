const { NotImplementedError } = require('../extensions/index.js')

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
  let number = n
  let arr = String(number).split('')
  let arrOfNumbers = arr.map((el) => +el)
  while (number > 9) {
    number = arrOfNumbers.reduce((acc, el) => acc + el)
    arr = String(number).split('')
    arrOfNumbers = arr.map((el) => +el)
  }
  return number
}

module.exports = {
  getSumOfDigits,
}
