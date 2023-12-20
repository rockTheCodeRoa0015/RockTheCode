const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(nameFinder, name) {
  for (let nameF of nameFinder) {
    if (name === nameF)
      return true + ' - posición: ' + nameFinder.indexOf(nameF)
  }
  return false
}

console.log(finderName(nameFinder, 'Peggy'))
