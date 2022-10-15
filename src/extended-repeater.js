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
  let resultString = "";
  str = String(str);
  let addition = options.hasOwnProperty("addition")
    ? String(options.addition)
    : "";
  let separator = options.hasOwnProperty("separator")
    ? String(options.separator)
    : "+";
  let additionSeparator = options.hasOwnProperty("additionSeparator")
    ? String(options.additionSeparator)
    : "|";
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  for (i = 1; i <= repeatTimes; i++) {
    let localString = "";
    localString += str;

    for (j = 1; j <= additionRepeatTimes; j++) {
      localString += addition;
      localString += j < additionRepeatTimes ? additionSeparator : "";
    }
    resultString += localString;
    resultString += i < repeatTimes ? separator : "";
  }

  return resultString;
}

module.exports = {
  repeater
};
