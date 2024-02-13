import { useEffect, useState } from 'react'
import './Animes.css'
import { Link } from 'react-router-dom'

const LIMIT = 12
let lastPage

const Animes = () => {
  const [animes, setAnimes] = useState([])
  const [page, setpage] = useState(1)

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime?limit=' + LIMIT + '&page=' + page)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        lastPage = res.pagination.last_visible_page
        setAnimes(res.data)
      })
  }, [page])

  if (page === 1 && document.querySelector('#beforeAnimeList')) {
    document.querySelector('#beforeAnimeList').disabled = true
  } else {
    if (document.querySelector('#beforeAnimeList'))
      document.querySelector('#beforeAnimeList').disabled = false
  }

  if (
    page === parseInt(lastPage) &&
    document.querySelector('#afterAnimeList')
  ) {
    document.querySelector('#afterAnimeList').disabled = true
  } else {
    if (document.querySelector('#afterAnimeList'))
      document.querySelector('#afterAnimeList').disabled = false
  }

  return (
    <div className='flex-container animes'>
      <div className='flex-container'>
        {animes.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <article className='flex-container animeList'>
              <img src={anime.images.jpg.image_url} />
              <h2>{anime.title}</h2>
            </article>
          </Link>
        ))}
      </div>
      <div className='flex-container'>
        <button id='beforeAnimeList' onClick={() => setpage(page - 1)}>
          Anterior
        </button>
        <button id='afterAnimeList' onClick={() => setpage(page + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default Animes
