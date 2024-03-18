import { Link } from 'react-router-dom'
import Film from '../../components/Film/Film'
import './Films.css'
import { useContext } from 'react'
import { FilmContext } from '../../provider/FilmProvider'

const Films = () => {
  const { films } = useContext(FilmContext)
  return (
    <div className='films'>
      {films.map((film, index) => {
        return (
          <Link to={`/details/${index}`} key={index}>
            <Film film={film}></Film>
          </Link>
        )
      })}
    </div>
  )
}

export default Films
