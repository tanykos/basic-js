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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let res = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const charCode = messageUpper.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        res += String.fromCharCode(((charCode - 65 + keyUpper.charCodeAt(j % key.length) - 65) % 26) + 65);
        j++;
      } else {
        res += messageUpper[i];
      }
    }

    return this.checkReverse(res);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    let res = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const charCode = encryptedMessageUpper.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        res += String.fromCharCode(((charCode - 65 - (keyUpper.charCodeAt(j % key.length) - 65) + 26) % 26) + 65);
        j++;
      } else {
        res += encryptedMessageUpper[i];
      }
    }

    return this.checkReverse(res);
  }

  checkReverse(str) {
    return this.isDirect 
              ? str 
              : str.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
