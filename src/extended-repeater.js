const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str)
  for (key in options) {
    options[key] = String(options[key])
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }
  if (!options.separator) {
    options.separator = '+'
  }
  if (!options.addition) {
    options.addition = ''
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }
  let res = []
  for (let i = 0; i < options.repeatTimes; i++) {
    let addition = []
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      addition.push(options.addition)
    }
    let additionRes = addition.join(options.additionSeparator)
    res.push([str, ...additionRes].join(''))
  }
  console.log(options)
  return res.join(options.separator)
}

module.exports = {
  repeater,
}
