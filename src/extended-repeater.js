const { NotImplementedError } = require('../extensions/index.js');

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
  if(typeof str !== 'string'){
    String(str)
  }
  if(options.addition !== undefined && typeof addition !== 'string'){
    options.addition = String(options.addition)
  }
  if(options.separator === undefined){
    options.separator = '+'
  }
  if(options.additionSeparator === undefined){
    options.additionSeparator = '|'
  }
  if(options.repeatTimes === undefined){
    options.repeatTimes = 1
  }
  if(options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1
  }
  
  
  let additionStr = []
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionStr.push(options.addition);
  }
  let additionStrResult = additionStr.join(options.additionSeparator)
  
  let resultStr = []
  for (let i = 0; i < options.repeatTimes; i++) {
    resultStr.push(str + additionStrResult);
  }
  return resultStr.join(options.separator)
}

module.exports = {
  repeater
};
