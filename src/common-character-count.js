const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let set1 = [...s1]
  let set2 = [...s2]
  let counter = 0
  set1.forEach((el, idx) => {
    set2.forEach((el2, idx2) => {
      if (el === el2) {
        counter++
        set1.splice(idx, 1)
        set2.splice(idx2, 1)
      }
    })
  })
  set1.forEach((el, idx) => {
    set2.forEach((el2, idx2) => {
      if (el === el2) {
        counter++
        set1.splice(idx, 1)
        set2.splice(idx2, 1)
      }
    })
  })
  return counter
}

module.exports = {
  getCommonCharacterCount,
}
