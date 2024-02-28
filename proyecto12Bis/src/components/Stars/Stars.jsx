import './Stars.css'

const Stars = ({ stars, rate, hover, setHover, handleValoration }) => {
  return (
    <div className='stars'>
      {[...Array(stars)].map((star, index) => {
        return (
          <label key={index}>
            <input
              type='radio'
              value={index + 1}
              onClick={() => handleValoration(index + 1)}
            />
            <div
              className={
                index + 1 <= (hover || rate) ? 'estrella rellena' : 'estrella'
              }
              onMouseOver={() => setHover(index + 1)}
              onMouseLeave={() => setHover(null)}
            ></div>
          </label>
        )
      })}
    </div>
  )
}

export default Stars
