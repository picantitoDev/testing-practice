const capitalize = require("./main.js")

test("First Character is Capitalized", () => {
  const string = capitalize("test")
  expect(string).toMatch(/^[A-Z]/)
})

test("Returns the same string if already capitalized", () => {
  const string = capitalize("Test")
  expect(string).toBe("Test")
})

test("Capitalizes first letter of a fully lowercase string", () => {
  const string = capitalize("hello")
  expect(string).toBe("Hello")
})

test("Only changes the first lowercase letter, leaves rest unchanged", () => {
  const string = capitalize("hElLo")
  expect(string).toBe("HElLo")
})

test("Handles strings with leading spaces", () => {
  const string = capitalize("  hello")
  expect(string).toBe("  Hello")
})

test("Returns 'no valid characters' for an empty string", () => {
  const string = capitalize("")
  expect(string).toBe("no valid characters")
})

test("Ignores numbers and symbols at the start", () => {
  const string = capitalize("123test")
  expect(string).toBe("123Test")
})
