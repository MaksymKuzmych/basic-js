const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let membersArr = members.filter((el) => typeof el === 'string')
  let firstLettersArr = []
  membersArr.forEach((el) => {
    let trim = el.trim()
    firstLettersArr.push(trim[0].toUpperCase())
  })
  let sortedArr = firstLettersArr.sort()
  return sortedArr.join('')
}

module.exports = {
  createDreamTeam,
}
