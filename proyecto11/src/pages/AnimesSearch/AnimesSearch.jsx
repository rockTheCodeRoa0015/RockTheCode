import './AnimesSearch.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const LIMITSEARCH = 12
let lastPageSearch

const AnimesSearch = () => {
  const { search } = useParams()
  const [animesSearch, setAnimesSearch] = useState([])
  const [pageSearch, setpageSearch] = useState(1)

  useEffect(() => {
    fetch(
      'https://api.jikan.moe/v4/anime?q=' +
        search +
        '&limit=' +
        LIMITSEARCH +
        '&page=' +
        pageSearch
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        lastPageSearch = res.pagination.last_visible_page
        setAnimesSearch(res.data)
      })
  }, [pageSearch, search])

  if (pageSearch === 1 && document.querySelector('#beforeAnimeListSearch')) {
    document.querySelector('#beforeAnimeListSearch').disabled = true
  } else {
    if (document.querySelector('#beforeAnimeListSearch'))
      document.querySelector('#beforeAnimeListSearch').disabled = false
  }

  if (
    pageSearch === parseInt(lastPageSearch) &&
    document.querySelector('#afterAnimeListSearch')
  ) {
    document.querySelector('#afterAnimeListSearch').disabled = true
  } else {
    if (document.querySelector('#afterAnimeListSearch'))
      document.querySelector('#afterAnimeListSearch').disabled = false
  }

  return (
    <div className='flex-container animesSearch'>
      <h2>Resultados de: {search}</h2>
      <div className='flex-container'>
        {animesSearch.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <article className='flex-container animeListSearch'>
              <img src={anime.images.jpg.image_url} />
              <h2>{anime.title}</h2>
            </article>
          </Link>
        ))}
      </div>
      <div className='flex-container'>
        <button
          id='beforeAnimeListSearch'
          onClick={() => setpageSearch(pageSearch - 1)}
        >
          Anterior
        </button>
        <button
          id='afterAnimeListSearch'
          onClick={() => setpageSearch(pageSearch + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default AnimesSearch
