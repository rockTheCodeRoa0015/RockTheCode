import { useEffect, useState } from 'react'
import { delCart, pushCart } from '../../utils/setCartItems'
import StyledHome from './Home.style'
import ArticleBook from '../../components/ArticleBook/ArticleBook'
import CustomDiv from '../../components/CustomDiv/CustomDiv'
import Title from '../../components/Title/Title'
import { getLastAdd, getTopSales } from '../../api/homeApi'

const Home = ({ numCart, setNumCart }) => {
  const [topBooks, setTopBooks] = useState()
  const [lastAddBooks, setLastAddBooks] = useState()

  useEffect(() => {
    getTopSales(setTopBooks)
    getLastAdd(setLastAddBooks)
  }, [])

  return (
    <StyledHome>
      <Title>Top Ventas</Title>
      <CustomDiv wrap={'wrap'}>
        {topBooks &&
          topBooks.map((book, index) => (
            <ArticleBook
              key={index}
              Book={book}
              numCart={numCart}
              setNumCart={setNumCart}
            ></ArticleBook>
          ))}
      </CustomDiv>
      <Title>Últimos añadidos</Title>
      <CustomDiv wrap={'wrap'}>
        {lastAddBooks &&
          lastAddBooks.map((book) => (
            <ArticleBook
              key={book._id}
              Book={book}
              numCart={numCart}
              setNumCart={setNumCart}
            ></ArticleBook>
          ))}
      </CustomDiv>
    </StyledHome>
  )
}

export default Home
