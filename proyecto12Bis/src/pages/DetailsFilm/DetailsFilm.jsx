import { useParams } from 'react-router-dom'
import './DetailsFilm.css'
import { useContext, useMemo, useState } from 'react'
import Stars from '../../components/Stars/Stars'
import useStars from '../../customHooks/useStars'
import { FilmContext } from '../../provider/FilmProvider'

const DetailsFilm = () => {
  const { films, setFavourite, setRating } = useContext(FilmContext)
  const { id } = useParams()
  const [film, setFilm] = useState(films[parseInt(id)])
  const [avg, setAvg] = useState()
  const { stars, rate, hover, setRate, setHover } = useStars()

  const avgRate = () => {
    const arrRate = film.rating
    let sumRate = 0
    for (const rate of arrRate) {
      sumRate += parseInt(rate)
    }
    setAvg(parseFloat(sumRate / arrRate.length).toFixed(1))
  }

  useMemo(() => {
    avgRate()
    if (film.valoration) {
      setRate(film.rating[film.rating.length - 1])
    }
  }, [film])

  const handlerFavourite = () => {
    setFavourite(film.name, film.favourite)
    setFilm({ ...film, favourite: !film.favourite })
  }

  const handleValoration = (val) => {
    setRate(val)
    setFilm({ ...film, valoration: true, rating: [...film.rating, val] })
    setRating(film.name, val)
  }

  return (
    <div className='details'>
      {film && (
        <>
          <div className='detailFilm'>
            <div className='detailsImg'>
              <img src={film.img} />
              {/*<div
                className={film.favourite ? 'fav' : 'noFav'}
                onClick={handlerFavourite}
      ></div>*/}
            </div>
            <div className='detailsInfo'>
              <div
                className={film.favourite ? 'fav' : 'noFav'}
                onClick={handlerFavourite}
              ></div>
              <h2>{film.name}</h2>
              <p>año: {film.age}</p>
              <p>Duración: {film.duration}</p>
              <p>Director: {film.director}</p>
              <p>Generos:</p>
              <div className='containGenre'>
                {film.genre.map((genre, index) => {
                  return <p key={index}>{genre}</p>
                })}
              </div>
              <p>Valoración: {avg}</p>
              <p>Sinopsis:</p>
              <p>{film.synopsis}</p>
            </div>
          </div>
          <div className='valoration'>
            <h2>Danos tu valoración:</h2>
            <Stars
              stars={stars}
              rate={rate}
              hover={hover}
              setHover={setHover}
              handleValoration={handleValoration}
            ></Stars>
          </div>
        </>
      )}
    </div>
  )
}

export default DetailsFilm
