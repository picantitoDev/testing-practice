const calculator = {
  add: function (a, b) {
    return a + b
  },
  subtract: function (a, b) {
    return a - b
  },
  multiply: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return b !== 0 ? a / b : "Error: Division by zero"
  },
}

module.exports = calculator
