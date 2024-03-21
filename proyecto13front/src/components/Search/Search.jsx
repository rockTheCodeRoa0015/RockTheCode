import { useRef } from 'react'
import ImgSearch from './ImgSearch'
import StyledSearch from './Search.style'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  let navigate = useNavigate()
  const refTitle = useRef()
  const pressKey = (e) => {
    if (e.key === 'Enter') {
      if (refTitle.current.value === '') {
        navigate('/books/all')
      } else {
        navigate('/search/' + refTitle.current.value)
        refTitle.current.value = ''
      }
    }
  }

  return (
    <>
      <StyledSearch
        ref={refTitle}
        placeholder='Libros'
        onKeyUp={(e) => pressKey(e)}
      ></StyledSearch>
      <ImgSearch refTitle={refTitle}></ImgSearch>
    </>
  )
}

export default Search
