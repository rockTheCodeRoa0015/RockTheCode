import { useEffect, useState } from 'react'
import './Top.css'
import { Link } from 'react-router-dom'
import Paginator from '../../components/Paginator/Paginator'

const LIMITTOP = 12

const Top = () => {
  const [animesTop, setAnimesTop] = useState([])
  const [pageTop, setpageTop] = useState(1)
  const [lastPageTop, setLastPageTop] = useState(1)

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
        setLastPageTop(res.pagination.last_visible_page)
        setAnimesTop(res.data)
      })
  }, [pageTop])

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
      <Paginator
        setFunc={setpageTop}
        page={pageTop}
        limit={lastPageTop}
      ></Paginator>
    </div>
  )
}

export default Top
