import { useEffect, useState } from 'react'
import './Animes.css'
import { Link } from 'react-router-dom'
import Paginator from '../../components/Paginator/Paginator'
import usePaginator from '../../customHook/usePaginator'

const LIMIT = 12

const Animes = () => {
  const [animes, setAnimes] = useState([])
  const { page, setPage, lastPage, setLastPage } = usePaginator()

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime?limit=' + LIMIT + '&page=' + page)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        setLastPage(res.pagination.last_visible_page)
        setAnimes(res.data)
      })
  }, [page])

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
      <Paginator setFunc={setPage} page={page} limit={lastPage}></Paginator>
    </div>
  )
}

export default Animes
