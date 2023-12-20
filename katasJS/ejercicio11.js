const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(mixedElements) {
  let sum = 0
  for (let mixedElement of mixedElements) {
    if (typeof mixedElement === 'string') {
      sum += mixedElement.length
    } else {
      sum += mixedElement
    }
  }
  return sum
}
console.log(averageWord(mixedElements))
