const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = []
  names.forEach((el1, idx) => {
    if (!res.includes(el1)) {
      res.push(el1)
    } else if (res.includes(el1) && el1.includes('(')) {
      res.push(`${el1}(${res.slice(0, idx).filter((el2) => el2 === el1).length})`)
    } else {
      res.push(`${el1}(${names.slice(0, idx).filter((el2) => el2 === el1).length})`)
    }
  })
  return res
}

module.exports = {
  renameFiles,
}
