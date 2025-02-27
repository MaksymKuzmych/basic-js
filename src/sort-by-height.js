const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrWithoutOne = arr.filter((el) => el !== -1);
  const sorted = arrWithoutOne.sort((a, b) => a - b);

  arr.forEach((el, idx) => {
    if (el === -1) {
      sorted.splice(idx, 0, el);
    }
  });

  return sorted;
}

module.exports = {
  sortByHeight,
};
