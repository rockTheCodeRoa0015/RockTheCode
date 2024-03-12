import { useParams } from 'react-router-dom'
import StyledBooks from './Books.style'

const Books = () => {
  const { id } = useParams()
  return <StyledBooks>Books {id}</StyledBooks>
}

export default Books
