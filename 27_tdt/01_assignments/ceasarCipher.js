// A caesarCipher function that takes a string and returns it with each character “shifted”.

// z wraps to a
// upper case letters are preserved
// puncuation is preserved

const ALPHABET = "abcdefghijklmnopqrstuvwxyza";

const caesarCipher = (str) => {
  let encryptedStr = "";
  for (let i = 0; i < str.length; i++) {
    // if character is a letter
    if (ALPHABET.includes(str[i].toLowerCase())) {
      // get location of letter in str
      const index = ALPHABET.search(str[i].toLowerCase());
      let nextLetter = ALPHABET.charAt(index + 1);
      // if character is a capital letter
      if (str[i] === str[i].toUpperCase()) {
        encryptedStr += nextLetter.toUpperCase();
      } else {
        encryptedStr += nextLetter;
      }
    } else {
      encryptedStr += str[i];
    }
  }
  return encryptedStr;
};

caesarCipher("aBcD");

module.exports = caesarCipher;
