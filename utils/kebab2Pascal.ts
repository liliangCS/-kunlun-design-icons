function kebab2Pascal(text: string) {
  const words = text.split("")
  words[0] = words[0].toUpperCase()
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "-") {
      words.splice(i, 1)
      words[i] = words[i].toUpperCase()
    }
  }
  return words.join("")
}

export default kebab2Pascal
