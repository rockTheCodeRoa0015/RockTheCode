export const INITIAL_STATE = {
  genres: [],
  genreClass: [],
  errors: {},
  msg: ''
}

export const reducerSuggestion = (state, action) => {
  switch (action.type) {
    case 'GENRES':
      if (action.event.target.classList[0] === 'genre') {
        const newGenre = {
          name: action.event.target.textContent,
          id: action.index
        }
        return {
          ...state,
          genres: [...state.genres, newGenre],
          genreClass: [...state.genreClass, action.index]
        }
      } else {
        return {
          ...state,
          genres: state.genres.filter((genre) => genre.id !== action.index),
          genreClass: state.genreClass.filter((genre) => genre !== action.index)
        }
      }
    case 'SUBMIT':
      const res = checkForm(state, action)
      return {
        ...state,
        errors: res.errors,
        msg: res.msg,
        genres: res.genres,
        genreClass: res.genreClass
      }
    default:
      return state
  }
}

const checkForm = (state, action) => {
  const arrGenre = []
  const arrRate = []
  let ObResponse = {}
  let obErrors = {}

  if (!action.name) {
    obErrors = {
      ...obErrors,
      name: {
        message: 'Obligatorio'
      }
    }
  }
  if (!action.age) {
    obErrors = {
      ...obErrors,
      age: {
        message: 'Obligatorio'
      }
    }
  }
  if (!action.duration) {
    obErrors = {
      ...obErrors,
      duration: {
        message: 'Obligatoria'
      }
    }
  }
  if (!action.director) {
    obErrors = {
      ...obErrors,
      director: {
        message: 'Obligatorio'
      }
    }
  }
  if (state.genres.length === 0) {
    obErrors = {
      ...obErrors,
      genre: {
        message: 'Obligatorio'
      }
    }
  }
  if (!action.cover) {
    obErrors = {
      ...obErrors,
      cover: {
        message: 'Obligatoria'
      }
    }
  }
  if (!action.rate) {
    obErrors = {
      ...obErrors,
      rate: {
        message: 'Obligatoria'
      }
    }
  }
  if (!action.synopsis) {
    obErrors = {
      ...obErrors,
      synopsis: {
        message: 'Obligatoria'
      }
    }
  }

  if (Object.keys(obErrors).length !== 0) {
    // console.log('errores')
    //return obErrors
    return (ObResponse = {
      ...ObResponse,
      errors: obErrors,
      msg: '',
      genres: state.genres,
      genreClass: state.genreClass
    })
  } else {
    //console.log('no errores')
    arrRate.push(action.rate)

    for (const genre of state.genres) {
      arrGenre.push(genre.name)
    }

    const newFilm = {
      name: action.name,
      age: action.age,
      duration: action.duration + ' min',
      director: action.director,
      genre: arrGenre,
      synopsis: action.synopsis,
      rating: arrRate,
      img: action.cover,
      favourite: false,
      valoration: true
    }

    action.setFilm(newFilm)
    return (ObResponse = {
      ...ObResponse,
      errors: {},
      msg: 'Pelicula añadida',
      genres: [],
      genreClass: []
    })
  }
}
