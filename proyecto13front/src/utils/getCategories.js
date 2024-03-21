export const getParamsCategories = (cat) => {
  let infoCat = {}
  switch (cat) {
    case 'manga':
      infoCat.id = 9
      infoCat.title = 'Genero Manga/Cómics'
      break
    case 'infantil':
      infoCat.id = 10
      infoCat.title = 'Genero Infantil'
      break
    case 'all':
      infoCat.id = 'all'
      infoCat.title = 'Todos los géneros'
      break
    case '1':
      infoCat.id = 1
      infoCat.title = 'Genero Romántica y Erótica'
      break
    case '2':
      infoCat.id = 2
      infoCat.title = 'Genero Negra'
      break
    case '3':
      infoCat.id = 3
      infoCat.title = 'Genero Histórica'
      break
    case '4':
      infoCat.id = 4
      infoCat.title = 'Genero Fantástica'
      break
    case '5':
      infoCat.id = 5
      infoCat.title = 'Genero Ciencia ficción'
      break
    case '6':
      infoCat.id = 6
      infoCat.title = 'Genero Terror'
      break
    case '7':
      infoCat.id = 7
      infoCat.title = 'Genero Humor'
      break
    case '8':
      infoCat.id = 8
      infoCat.title = 'Genero Viajes'
      break
    default:
      infoCat.id = 'all'
      infoCat.title = 'Todos los géneros'
      break
  }
  return infoCat
}
