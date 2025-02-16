const reverseString = require("./reverseString.js")

test("should reverse a regular string", () => {
  expect(reverseString("hello")).toBe("olleh")
})

test("should return the same character for a single character string", () => {
  expect(reverseString("a")).toBe("a")
})

test("should return an empty string when given an empty string", () => {
  expect(reverseString("")).toBe("")
})

test("should reverse a palindrome correctly", () => {
  expect(reverseString("racecar")).toBe("racecar")
})

test("should reverse a string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh")
})

test("should reverse a string with special characters", () => {
  expect(reverseString("!@#123abc")).toBe("cba321#@!")
})

test("should handle uppercase and lowercase letters", () => {
  expect(reverseString("AbCdEfG")).toBe("GfEdCbA")
})

test("should handle Unicode characters (emojis, accents)", () => {
  expect(reverseString("mañana 😊")).toBe("😊 anañam")
})

test("should handle non-Latin characters", () => {
  expect(reverseString("你好")).toBe("好你")
})
