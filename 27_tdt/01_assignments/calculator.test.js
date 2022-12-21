const calculator = require("./calculator");

test("add 2+2 = 4", () => {
  expect(calculator(2, "+", 2)).toBe(4);
});

test("divide 2/2 = 1", () => {
  expect(calculator(2, "/", 2)).toBe(1);
});
