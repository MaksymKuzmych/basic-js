const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') {
    return false
  }
  if (!parseFloat(sampleActivity) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15) {
    return false
  }
  if (arguments[0] == undefined) {
    return false
  }
  const halfLife = 5730
  let k = Math.log(2) / halfLife
  let t = Math.log(15 / parseFloat(sampleActivity)) / k
  return Math.ceil(t)
}

module.exports = {
  dateSample,
}
