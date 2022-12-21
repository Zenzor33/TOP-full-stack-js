// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const calculator = (int1, operator, int2) => {
  if (typeof int1 !== "number" || typeof int2 !== "number")
    throw new Error(`${int1} or ${int2} is not a number`);
  // add
  if (operator === "+") return int1 + int2;
  if (operator === "-") return int1 - int2;
  if (operator === "/") return int1 / int2;
  if (operator === "*") return int1 * int2;
};

module.exports = calculator;
