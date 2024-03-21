import { useParams } from 'react-router-dom'
import StyledSearchBook from './SearchBook.style'
import { useEffect, useState } from 'react'
import usePaginator from '../../customHooks/usePaginator'
import { getBooksByTitle } from '../../api/bookApi'
import Title from '../../components/Title/Title'
import Paginator from '../../components/Paginator/Paginator'
import ArticleBook from '../../components/ArticleBook/ArticleBook'
import CustomDiv from '../../components/CustomDiv/CustomDiv'

const SearchBook = () => {
  const { search } = useParams()
  const [books, setBooks] = useState()
  const { page, lastPage, setLastPage, sumPage, substractPage, resetPage } =
    usePaginator()

  useEffect(() => {
    getBooksByTitle(search, setBooks, page, setLastPage)
  }, [page, search])
  return (
    <StyledSearchBook>
      <Title>Resultados: {search}</Title>
      <CustomDiv wrap={'wrap'} w={'80%'}>
        {books &&
          books.map((book, index) => (
            <ArticleBook key={index} Book={book}></ArticleBook>
          ))}
      </CustomDiv>
      <Paginator
        add={sumPage}
        substract={substractPage}
        page={page}
        limit={lastPage}
      ></Paginator>
    </StyledSearchBook>
  )
}

export default SearchBook
