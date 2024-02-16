import { useNavigate } from 'react-router-dom'
import './InputSearch'

const InputSearch = () => {
  let navigate = useNavigate()
  const pressKey = (e) => {
    const search = document.querySelector('#inSearch')
    navigate('/search/' + search.value)
    search.value = ''
  }

  return (
    <input
      id='inSearch'
      placeholder='Anime'
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          pressKey(e)
        }
      }}
    />
  )
}

export default InputSearch
