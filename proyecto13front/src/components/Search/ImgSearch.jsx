import { useNavigate } from 'react-router-dom'
import StyledImgSearch from './ImgSearch.style'

const ImgSearch = ({ refTitle }) => {
  let navigate = useNavigate()
  const serachBook = () => {
    if (refTitle.current.value === '') {
      navigate('/books/all')
    } else {
      navigate('/search/' + refTitle.current.value)
      refTitle.current.value = ''
    }
  }
  return (
    <StyledImgSearch
      src='../assets/lupa.png'
      alt='buscador'
      onClick={serachBook}
    ></StyledImgSearch>
  )
}

export default ImgSearch
