const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(text, key) {
    
    if (text == undefined || key == undefined) throw Error('Incorrect arguments!');

    let encryptedText = "";
    const regex = /[^a-z]/gi;
    let clearedText = text.replace(regex, "").toUpperCase();
    let fullKey = key
      .repeat(Math.ceil(clearedText.length / key.length))
      .slice(0, clearedText.length)
      .toUpperCase();

    let idx = 0;
    for (let char of text.toUpperCase()) {
      if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
        encryptedText += String.fromCharCode(((clearedText[idx].charCodeAt() - 65 + (fullKey[idx].charCodeAt() - 65)) % 26) + 65);
        idx++;
      } else {
        encryptedText += char;
      }
    }

    if (!this.direct)
      encryptedText = encryptedText.split("").reverse().join("");

    return encryptedText;
  }
  decrypt(text, key) {
    
    if (text == undefined || key == undefined) throw Error('Incorrect arguments!');

    let encryptedText = "";
    const regex = /[^a-z]/gi;
    let clearedText = text.replace(regex, "").toUpperCase();
    let fullKey = key
      .repeat(Math.ceil(clearedText.length / key.length))
      .slice(0, clearedText.length)
      .toUpperCase();

    let idx = 0;
    for (let char of text.toUpperCase()) {
      if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
        encryptedText += String.fromCharCode(((((clearedText[idx].charCodeAt() - 65) - (fullKey[idx].charCodeAt() - 65)) +26) % 26) + 65);
        idx++;
      } else {
        encryptedText += char;
      }
    }

    if (!this.direct)
      encryptedText = encryptedText.split("").reverse().join("");

    return encryptedText;
  }
}

module.exports = {
  VigenereCipheringMachine
};
