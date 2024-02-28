import { Link } from 'react-router-dom'
import Film from '../../components/Film/Film'
import './Films.css'

const Films = ({ films }) => {
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
