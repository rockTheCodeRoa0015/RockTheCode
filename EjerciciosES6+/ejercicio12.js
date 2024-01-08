/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:*/
function findArrayIndex(array, text) {
  console.log('posicion: ' + array.indexOf(text))
}

/*Ej array:*/
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

findArrayIndex(mainCharacters, 'Leia')
findArrayIndex(mainCharacters, 'Chewbacca')
findArrayIndex(mainCharacters, 'Obi-Wan')
findArrayIndex(mainCharacters, 'Jesus')
