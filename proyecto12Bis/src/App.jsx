import { Route, Routes } from 'react-router-dom'
import './App.css'
import Films from './pages/Films/Films'
import Favourites from './pages/Favourites/Favourites'
import RouteNotFound from './pages/RouteNotFound/RouteNotFound'
import Suggestions from './pages/Suggestions/Suggestions'
import Header from './components/Header/Header'
import { useState } from 'react'
import { arrFilms } from './data/data'
import DetailsFilm from './pages/DetailsFilm/DetailsFilm'
import Footer from './components/Footer/Footer'

function App() {
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
  //console.log(films)
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Films films={films} />}></Route>
        <Route path='/fav' element={<Favourites films={films} />}></Route>
        <Route path='/sug' element={<Suggestions setFilm={setFilm} />}></Route>
        <Route
          path='/details/:id'
          element={
            <DetailsFilm
              films={films}
              setFavourite={setFavourite}
              setRating={setRating}
            />
          }
        ></Route>
        <Route path='/*' element={<RouteNotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
