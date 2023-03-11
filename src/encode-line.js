const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const resArr = [];
  const resWithNumbers = [];

  arr.forEach((el, idx) => {
    if (el === arr[idx - 1]) {
      resArr[resArr.length - 1].push(el);
    } else {
      resArr.push([el]);
    }
  });

  resArr.forEach((el) => {
    if (el.length > 1) {
      resWithNumbers.push(`${el.length}${el[0]}`);
    } else {
      resWithNumbers.push(el[0]);
    }
  });

  return resWithNumbers.join('');
}

module.exports = {
  encodeLine,
};
