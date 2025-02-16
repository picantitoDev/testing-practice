function capitalize(string) {
  if (string.trim().length === 0) {
    return "no valid characters"
  }

  const index = [...string].findIndex((char) => /[a-z]/i.test(char))
  if (index === -1) return "no valid characters"

  return (
    string.slice(0, index) +
    string.charAt(index).toUpperCase() +
    string.slice(index + 1)
  )
}

module.exports = capitalize
