const reverseString = require("./reverseString");

test("reverseString jello", () => {
  expect(reverseString("jello")).toStrictEqual("ollej");
});
