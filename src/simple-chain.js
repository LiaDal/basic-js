const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],  
  getLength() {
   return this.chain.length
  },
  addLink(value) {
   this.chain.push(`( ${value} )`)
   return this
  },
  removeLink(position) {
   if(typeof position !== 'number' || position > this.chain.length || position <= 0 || !Number.isInteger(position)){
    this.chain.length = 0;
    throw new Error('You can\'t remove incorrect link!');
   } else {

     let index = position - 1      
     this.chain.splice(index, 1)
     return this
   }
  },
  reverseChain() {
   this.chain.reverse()
   return this
  },
  finishChain() {
    
    let copy = this.chain.slice();
    this.chain.length = 0;
    return copy.join('~~');
  },
};


module.exports = {
  chainMaker
};
