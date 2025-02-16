function caesarCipher(string, shift) {
  shift = shift % 26
  let str = string.toLowerCase()
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let result = ""

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    let currentIndex = alphabet.indexOf(char)
    let newIndex = currentIndex + shift
    if (newIndex > 25) {
      newIndex -= 26
    }

    if (newIndex < 0) {
      newIndex += 26
    }

    if (char === " " || !/[a-z]/.test(char)) {
      result += char
    } else if (string[i] === string[i].toUpperCase()) {
      result += alphabet[newIndex].toUpperCase()
    } else {
      result += alphabet[newIndex]
    }
  }

  return result
}

console.log(caesarCipher("Hello, World!", 3))
module.exports = caesarCipher
