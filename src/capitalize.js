function capitalize(string) {
  if (string.trim().length === 0) {
    return "no valid characters"
  }

  const index = [...string].findIndex((char) => /[a-z]/i.test(char))

  return (
    string.slice(0, index) +
    string.charAt(index).toUpperCase() +
    string.slice(index + 1)
  )
}

module.exports = capitalize
