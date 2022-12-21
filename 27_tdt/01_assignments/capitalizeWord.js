const capitalizeWord = (str) => {
  let capitalizedFirstChar = str.charAt(0).toUpperCase();
  let firstLetterSlicedFromStr = str.slice(1, str.length);
  let concat = capitalizedFirstChar + firstLetterSlicedFromStr;
  return concat;
};

module.exports = capitalizeWord;
