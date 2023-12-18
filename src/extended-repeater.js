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
  const joinArr = (times, addStr, addSeparator = '+') => {
   const add = (addStr === null) ? 'null' : addStr;
    return new Array(times).fill(add, 0).join(addSeparator);
  }

  const strAddition = joinArr(options.additionRepeatTimes, options.addition, options.additionSeparator || '|');
  const res = joinArr(options.repeatTimes, str + strAddition, options.separator);
  
  return res;
}

module.exports = {
  repeater
};
