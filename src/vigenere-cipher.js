const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  encrypt(string, key) {
    if (arguments.length < 2 || typeof string !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    let res = []
    key = key.toUpperCase()
    let saveStr = string
    string
      .toUpperCase()
      .split(' ')
      .join('')
      .split('')
      .forEach((el, idx) => {
        if (!this.letters.includes(el)) {
          res.push(el)
          return
        }
        let indexString = this.letters.indexOf(el)
        let indexKey = this.letters.indexOf(key[idx % key.length])
        console.log(indexString, indexKey, this.letters[(indexString + indexKey) % 26])
        res.push(this.letters[(indexString + indexKey) % 26])
      })
    saveStr.split('').forEach((el, idx) => {
      if (el === ' ') {
        res.splice(idx, 0, ' ')
      }
    })
    if (this.isDirect === undefined || this.isDirect === true) {
      return res.join('')
    } else {
      return res.reverse().join('')
    }
  }

  decrypt(string, key) {
    if (arguments.length < 2 || typeof string !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    let res = []
    key = key.toUpperCase()
    let saveStr = string
    string
      .toUpperCase()
      .split(' ')
      .join('')
      .split('')
      .forEach((el, idx) => {
        if (!this.letters.includes(el)) {
          res.push(el)
          return
        }
        let indexString = this.letters.indexOf(el)
        let indexKey = this.letters.indexOf(key[idx % key.length])
        let diff = indexString - indexKey
        if (indexString - indexKey < 0) {
          diff = 26 + (indexString - indexKey)
        }
        res.push(this.letters[diff % 26])
      })
    saveStr.split('').forEach((el, idx) => {
      if (el === ' ') {
        res.splice(idx, 0, ' ')
      }
    })
    console.log(res)
    if (this.isDirect === undefined || this.isDirect === true) {
      return res.join('')
    } else {
      return res.reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
}
