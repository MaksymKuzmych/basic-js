const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const obj = {};

  domains.forEach((el) => {
    arr.push(el.split('.').reverse());
  });

  let maxLength = 0;

  arr.forEach((el) => {
    if (el.length > maxLength) {
      maxLength = el.length;
    }
  });

  const resArr = [];

  for (let i = 0; i < arr.length; i++) {
    resArr.push(arr[i].map((el, idx) => `.${arr[i].slice(0, idx + 1).join('.')}`));
  }

  const wholeArr = resArr.flat(Infinity);

  wholeArr.forEach((el) => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  });

  return obj;
}

module.exports = {
  getDNSStats,
};
