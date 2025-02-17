function analyzeArray(array = []) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array")
  }

  if (array.some(isNaN)) {
    throw new Error("Input must be an array")
  }

  if (array.length === 0) {
    return {
      average: NaN,
      min: undefined,
      max: undefined,
      length: 0,
    }
  }

  const min = Math.min(...array)
  const max = Math.max(...array)
  const length = array.length

  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  const average = sum / length

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  }
}

module.exports = analyzeArray
