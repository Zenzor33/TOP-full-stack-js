// A reverseString function that takes a string and returns it reversed.

const reverseString = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

module.exports = reverseString;
