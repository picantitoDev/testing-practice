const reverseString = require("./reverseString.js")

test("First Character is Capitalized", () => {
  const string = reverseString("ABCD")
  expect(string).toBe("DCBA")
})
