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
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(+position) || isNaN(parseInt(position)) || position < 1 || this.chain[position-1] == undefined) {
        this.chain = [];
        throw Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishString = '';

    for (i = 0; i < this.chain.length; i ++){
        finishString += '( ' + this.chain[i] + ' )';
        if (i < this.chain.length - 1) {
            finishString += '~~';
        }
    }

    this.chain = [];

    return finishString;

  },
};

module.exports = {
  chainMaker
};
