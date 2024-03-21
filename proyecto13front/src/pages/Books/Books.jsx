import { useParams } from 'react-router-dom'
import StyledBooks from './Books.style'
import { useEffect, useState } from 'react'
import { getBooksByCategorie } from '../../api/bookApi'
import CustomDiv from '../../components/CustomDiv/CustomDiv'
import ArticleBook from '../../components/ArticleBook/ArticleBook'
import usePaginator from '../../customHooks/usePaginator'
import Paginator from '../../components/Paginator/Paginator'
import Title from '../../components/Title/Title'
import Select from '../../components/Select/Select'
import { getCategoriesSelect } from '../../api/categorieApi'
import useGetCategorie from '../../customHooks/useGetCategorie'

const Books = () => {
  const { id } = useParams()
  const [books, setBooks] = useState()
  const [title, setTitle] = useState('Todos los géneros')
  const [categories, setCategories] = useState()
  const { value, setValue } = useGetCategorie()
  const { page, lastPage, setLastPage, sumPage, substractPage, resetPage } =
    usePaginator()

  useEffect(() => {
    resetPage()
    getCategoriesSelect(setCategories)
    getBooksByCategorie(id, setBooks, page, setLastPage, setTitle, value)
  }, [id, value])
  useEffect(() => {
    getBooksByCategorie(id, setBooks, page, setLastPage, setTitle, value)
  }, [page])
  return (
    <StyledBooks>
      <Title>{title}</Title>
      {id === 'all' ? (
        <Select list={categories} setValue={setValue}></Select>
      ) : null}

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
    </StyledBooks>
  )
}

export default Books
