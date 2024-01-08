/*Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.*/
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

const mainCharacters1 = [...mainCharacters]
const mainCharacters2 = [...mainCharacters]
const mainCharacters3 = [...mainCharacters]

function removeItem(array, text) {
  array.splice(array.indexOf(text), 1)
  console.log(array)
}

removeItem(mainCharacters, 'Leia')
removeItem(mainCharacters1, 'Chewbacca')
removeItem(mainCharacters2, 'Obi-Wan')
removeItem(mainCharacters3, 'Rey')
