import { useEffect, useState } from 'react'
import './Top.css'
import { Link } from 'react-router-dom'
import Paginator from '../../components/Paginator/Paginator'
import usePaginator from '../../customHook/usePaginator'

const LIMITTOP = 12

const Top = () => {
  const [animesTop, setAnimesTop] = useState([])
  const { page, setPage, lastPage, setLastPage } = usePaginator()

  useEffect(() => {
    fetch(
      'https://api.jikan.moe/v4/top/anime?limit=' + LIMITTOP + '&page=' + page
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        setLastPage(res.pagination.last_visible_page)
        setAnimesTop(res.data)
      })
  }, [page])

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
      <Paginator setFunc={setPage} page={page} limit={lastPage}></Paginator>
    </div>
  )
}

export default Top
