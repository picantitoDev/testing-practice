function capitalize(string) {
  if (string.length === 0) {
    return "no valid characters"
  }

  if (string.charAt(0) === " " || !isNaN(string.charAt(0))) {
    let index = 0
    const regex = /[a-z]/i
    let str = ""

    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i).match(regex)) {
        index = i
        break
      }
    }
    str = string.slice(0, index)

    return str + string.charAt(index).toUpperCase() + string.slice(index + 1)
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(capitalize("   test"))
module.exports = capitalize
