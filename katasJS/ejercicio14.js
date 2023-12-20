const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(counterWords) {
  const result = {}
  counterWords.forEach((value) => {
    result[value] = (result[value] || 0) + 1
  })
  return result
}

console.log(repeatCounter(counterWords))
