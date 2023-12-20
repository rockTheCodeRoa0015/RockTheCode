function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberTwo > numberOne) {
    return numberTwo
  } else {
    return 'Son iguales'
  }
}
console.log(sum(5, 5))
