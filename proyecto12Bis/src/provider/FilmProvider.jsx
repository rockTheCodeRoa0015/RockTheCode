import { createContext, useState } from 'react'
import { arrFilms } from '../data/data'

export const FilmContext = createContext()
const FilmProvider = ({ children }) => {
  const [films, setFilms] = useState(arrFilms)

  const setFavourite = (name, isFav) => {
    setFilms((prevFilm) => {
      return prevFilm.map((film) => {
        if (film.name === name) {
          return { ...film, favourite: !isFav }
        } else {
          return film
        }
      })
    })
  }

  const setRating = (name, rating) => {
    setFilms((prevFilm) => {
      return prevFilm.map((film) => {
        if (film.name === name) {
          return { ...film, rating: [...film.rating, rating], valoration: true }
        } else {
          return film
        }
      })
    })
  }

  const setFilm = (film) => {
    setFilms([...films, film])
  }
  return (
    <FilmContext.Provider value={{ films, setFavourite, setRating, setFilm }}>
      {children}
    </FilmContext.Provider>
  )
}

export default FilmProvider
