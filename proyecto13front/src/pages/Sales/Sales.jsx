import { useEffect, useState } from 'react'
import CustomDiv from '../../components/CustomDiv/CustomDiv'
import Paragraph from '../../components/Paragraph/Paragraph'
import Title from '../../components/Title/Title'
import StyledSales from './Sales.style'
import { getDetailsSalesbyUserId } from '../../api/saleApi'
import Image from '../../components/Image/Image'
import usePaginator from '../../customHooks/usePaginator'
import Paginator from '../../components/Paginator/Paginator'

const Sales = () => {
  const [salesBooks, setSalesBooks] = useState([])
  const { page, lastPage, setLastPage, sumPage, substractPage, resetPage } =
    usePaginator()

  useEffect(() => {
    getDetailsSalesbyUserId(
      localStorage.getItem('id'),
      setSalesBooks,
      page,
      setLastPage
    )
  }, [page])

  return (
    <StyledSales>
      <Title>Mis pedidos</Title>
      <CustomDiv w={'1000px'} h={'50px'}>
        <CustomDiv w={'10%'} h={'100%'}>
          <Paragraph>Imagen</Paragraph>
        </CustomDiv>
        <CustomDiv
          w={'50%'}
          h={'100%'}
          jc={'flex-start'}
          padding={'0 var(--rtc-padding-s)'}
        >
          <Paragraph>Titulo</Paragraph>
        </CustomDiv>
        <CustomDiv w={'10%'} h={'100%'}>
          <Paragraph>Precio</Paragraph>
        </CustomDiv>
        <CustomDiv w={'10%'} h={'100%'}>
          <Paragraph>Cantidad</Paragraph>
        </CustomDiv>
        <CustomDiv w={'10%'} h={'100%'}>
          <Paragraph>Fecha</Paragraph>
        </CustomDiv>
        <CustomDiv w={'10%'} h={'100%'}>
          <Paragraph>Estado</Paragraph>
        </CustomDiv>
      </CustomDiv>
      {salesBooks.length !== 0 ? (
        salesBooks.map((book) => (
          <CustomDiv key={book.id} dir={'row'} w={'1000px'} h={'110px'}>
            <CustomDiv w={'10%'} h={'100%'}>
              <Image
                src={book.cover}
                alt={book.title}
                w={'75px'}
                h={'100px'}
              ></Image>
            </CustomDiv>
            <CustomDiv
              w={'50%'}
              h={'100%'}
              jc={'flex-start'}
              padding={'0 var(--rtc-padding-s)'}
            >
              <Paragraph>{book.title}</Paragraph>
            </CustomDiv>
            <CustomDiv w={'10%'} h={'100%'}>
              <Paragraph>{book.price} €</Paragraph>
            </CustomDiv>
            <CustomDiv w={'10%'} h={'100%'}>
              <Paragraph>{book.quantity}</Paragraph>
            </CustomDiv>
            <CustomDiv w={'10%'} h={'100%'}>
              <Paragraph>{book.date}</Paragraph>
            </CustomDiv>
            <CustomDiv w={'10%'} h={'100%'}>
              <Paragraph>{book.state}</Paragraph>
            </CustomDiv>
          </CustomDiv>
        ))
      ) : (
        <Paragraph>No hay pedidos</Paragraph>
      )}
      {salesBooks.length !== 0 ? (
        <Paginator
          add={sumPage}
          substract={substractPage}
          page={page}
          limit={lastPage}
        ></Paginator>
      ) : null}
    </StyledSales>
  )
}

export default Sales
