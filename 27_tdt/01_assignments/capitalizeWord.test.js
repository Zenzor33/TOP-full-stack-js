const capitalizeWord = require("./capitalizeWord");

test("capitalize jello", () => {
  expect(capitalizeWord("jello")).toStrictEqual("Jello");
});

test("capitalize Jello", () => {
  expect(capitalizeWord("Jello")).toStrictEqual("Jello");
});

test("capitalize i", () => {
  expect(capitalizeWord("i")).toStrictEqual("I");
});
