import { useParams } from 'react-router-dom'
import StyledBooks from './Books.style'
import { useEffect, useState } from 'react'
import { getBooksByCategorie } from '../../api/bookApi'
import CustomDiv from '../../components/CustomDiv/CustomDiv'
import ArticleBook from '../../components/ArticleBook/ArticleBook'

const Books = () => {
  const { id } = useParams()
  const [books, setBooks] = useState()

  useEffect(() => {
    getBooksByCategorie(id, setBooks)
  }, [id])
  return (
    <StyledBooks>
      <CustomDiv wrap={'wrap'} w={'80%'}>
        {books &&
          books.map((book, index) => (
            <ArticleBook key={index} Book={book}></ArticleBook>
          ))}
      </CustomDiv>
    </StyledBooks>
  )
}

export default Books
