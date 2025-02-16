const calculator = require("../src/calculator.js")

test("should add two numbers correctly", function () {
  expect(calculator.add(5, 3)).toBe(8)
})

test("should subtract two numbers correctly", function () {
  expect(calculator.subtract(10, 4)).toBe(6)
})

test("should multiply two numbers correctly", function () {
  expect(calculator.multiply(6, 7)).toBe(42)
})

test("should divide two numbers correctly", function () {
  expect(calculator.divide(20, 4)).toBe(5)
})

test("should return an error message when dividing by zero", function () {
  expect(calculator.divide(10, 0)).toBe("Error: Division by zero")
})

test("should handle negative numbers", function () {
  expect(calculator.add(-3, -7)).toBe(-10)
  expect(calculator.subtract(-5, -2)).toBe(-3)
  expect(calculator.multiply(-3, 4)).toBe(-12)
  expect(calculator.divide(-8, 2)).toBe(-4)
})

test("should handle decimal numbers", function () {
  expect(calculator.add(2.5, 3.5)).toBeCloseTo(6.0)
  expect(calculator.multiply(2.5, 4)).toBeCloseTo(10.0)
})
