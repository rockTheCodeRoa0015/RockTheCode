import './AnimesSearch.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Paginator from '../../components/Paginator/Paginator'

const LIMITSEARCH = 12

const AnimesSearch = () => {
  const { search } = useParams()
  const [animesSearch, setAnimesSearch] = useState([])
  const [pageSearch, setpageSearch] = useState(1)
  const [lastPageSearch, setLastPageSearch] = useState(1)

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
        setLastPageSearch(res.pagination.last_visible_page)
        setAnimesSearch(res.data)
      })
  }, [pageSearch, search])

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
      <Paginator
        setFunc={setpageSearch}
        page={pageSearch}
        limit={lastPageSearch}
      ></Paginator>
    </div>
  )
}

export default AnimesSearch
