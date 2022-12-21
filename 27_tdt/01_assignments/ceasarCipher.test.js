const caesarCipher = require("./ceasarCipher");

test("abcd == bcde", () => {
  expect(caesarCipher("abcd")).toStrictEqual("bcde");
});

test("abcd == bcde", () => {
  expect(caesarCipher("abcd")).toStrictEqual("bcde");
});

test("aBcD == bCdE", () => {
  expect(caesarCipher("aBcD")).toStrictEqual("bCdE");
});

test("aBcDZz == bCdEAa", () => {
  expect(caesarCipher("aBcDZz")).toStrictEqual("bCdEAa");
});

test("a!b == b!c", () => {
  expect(caesarCipher("a!b")).toStrictEqual("b!c");
});
