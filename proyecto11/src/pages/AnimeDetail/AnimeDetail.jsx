import { useParams } from 'react-router-dom'
import './AnimeDetail.css'
import { useEffect, useState } from 'react'

const AnimeDetail = () => {
  const { id } = useParams()
  const [anime, setAnime] = useState()

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime/' + id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        setAnime(res.data)
      })
  }, [])

  return (
    <div className='flex-container animeDetail'>
      <section className='flex-container sectionDetail'>
        {anime && (
          <>
            <div>
              <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            </div>
            <div className='flex-container infoDetails'>
              <h2>{anime.title}</h2>
              <p>Num. episodios: {anime.episodes}</p>
              <p>Año: {anime.year}</p>
              <div className='flex-container scoreDetail'>
                <p>Puntuación: {anime.score}</p>
                <div className='estrella'></div>
              </div>
              <div className='flex-container genreDeatils'>
                {anime.genres.map((genre) => (
                  <p key={genre.mal_id}>{genre.name}</p>
                ))}
              </div>
              <p>Sinopsis: {anime.synopsis}</p>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default AnimeDetail
