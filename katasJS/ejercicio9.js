const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(numbers) {
  let sum = 0
  for (let number of numbers) {
    sum += number
  }
  return sum
}

console.log(sumAll(numbers))
