const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`()`);
    } else {
      this.chain.push(`( ${value} )`);
    }

    return chainMaker;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }

    return chainMaker;
  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return chainMaker;
  },
  finishChain() {
    const res = this.chain.join('~~');

    this.chain = [];

    return res;
  },
};

module.exports = {
  chainMaker,
};
