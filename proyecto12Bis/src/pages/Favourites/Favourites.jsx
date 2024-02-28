import { Link } from 'react-router-dom'
import Film from '../../components/Film/Film'
import './Favourites.css'
import { useEffect, useState } from 'react'

const Favourites = ({ films }) => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    let numFav = 0
    for (const film of films) {
      if (film.favourite) {
        numFav++
      }
    }
    setNum(numFav)
  }, [])

  return (
    <div className='films'>
      {num !== 0 ? (
        films.map((film, index) => {
          if (film.favourite) {
            return (
              <Link to={`/details/${index}`} key={index}>
                <Film film={film}></Film>
              </Link>
            )
          }
        })
      ) : (
        <p>No hay peliculas favoritas</p>
      )}
    </div>
  )
}

export default Favourites
