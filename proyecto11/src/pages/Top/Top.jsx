import { useEffect, useState } from 'react'
import './Top.css'
import { Link } from 'react-router-dom'

const LIMITTOP = 12
let lastPageTop

const Top = () => {
  const [animesTop, setAnimesTop] = useState([])
  const [pageTop, setpageTop] = useState(1)

  useEffect(() => {
    fetch(
      'https://api.jikan.moe/v4/top/anime?limit=' +
        LIMITTOP +
        '&page=' +
        pageTop
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        lastPageTop = res.pagination.last_visible_page
        setAnimesTop(res.data)
      })
  }, [pageTop])

  if (pageTop === 1 && document.querySelector('#beforeAnimeListTop')) {
    document.querySelector('#beforeAnimeListTop').disabled = true
  } else {
    if (document.querySelector('#beforeAnimeListTop'))
      document.querySelector('#beforeAnimeListTop').disabled = false
  }

  if (
    pageTop === parseInt(lastPageTop) &&
    document.querySelector('#afterAnimeListTop')
  ) {
    document.querySelector('#afterAnimeListTop').disabled = true
  } else {
    if (document.querySelector('#afterAnimeListTop'))
      document.querySelector('#afterAnimeListTop').disabled = false
  }

  return (
    <div className='flex-container top'>
      <div className='flex-container'>
        {animesTop.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <article className='flex-container animeListTop'>
              <img src={anime.images.jpg.image_url} />
              <h2>{anime.title}</h2>
            </article>
          </Link>
        ))}
      </div>
      <div className='flex-container'>
        <button id='beforeAnimeListTop' onClick={() => setpageTop(pageTop - 1)}>
          Anterior
        </button>
        <button id='afterAnimeListTop' onClick={() => setpageTop(pageTop + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default Top
