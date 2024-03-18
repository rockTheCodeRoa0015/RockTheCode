import './AnimesSearch.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Paginator from '../../components/Paginator/Paginator'
import usePaginator from '../../customHook/usePaginator'

const LIMITSEARCH = 12

const AnimesSearch = () => {
  const { search } = useParams()
  const [animesSearch, setAnimesSearch] = useState([])
  const { page, setPage, lastPage, setLastPage } = usePaginator()

  useEffect(() => {
    fetch(
      'https://api.jikan.moe/v4/anime?q=' +
        search +
        '&limit=' +
        LIMITSEARCH +
        '&page=' +
        page
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        setLastPage(res.pagination.last_visible_page)
        setAnimesSearch(res.data)
      })
  }, [page, search])

  return (
    <div className='flex-container animesSearch'>
      <h2>Resultados de: {search}</h2>
      <div className='flex-container'>
        {animesSearch.length !== 0 ? (
          animesSearch.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <article className='flex-container animeListSearch'>
                <img src={anime.images.jpg.image_url} />
                <h2>{anime.title}</h2>
              </article>
            </Link>
          ))
        ) : (
          <p>No se han encontrados resultados</p>
        )}
      </div>
      <Paginator setFunc={setPage} page={page} limit={lastPage}></Paginator>
    </div>
  )
}

export default AnimesSearch
