import './Film.css'

const Film = ({ film }) => {
  return (
    <div className='film'>
      <div>
        <img src={film.img}></img>
      </div>
      <div>
        <h2>{film.name}</h2>
      </div>
    </div>
  )
}

export default Film
