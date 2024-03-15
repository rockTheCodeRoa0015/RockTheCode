import { useEffect, useState } from 'react'
import Title from '../../components/Title/Title'
import StyledBasket from './Basket.style'
import { getDetailCart } from '../../api/cartApi'
import Paragraph from '../../components/Paragraph/Paragraph'
import CustomDiv from '../../components/CustomDiv/CustomDiv'
import Image from '../../components/Image/Image'
import ButtonTotal from '../../components/ButtonTotal/ButtonTotal'

const Basket = () => {
  const [cartBooks, setCartBooks] = useState([])

  useEffect(() => {
    callBooks()
  }, [])

  const callBooks = async () => {
    const books = await getDetailCart(localStorage.getItem('id'))
    setCartBooks(books)
  }

  return (
    <StyledBasket>
      <Title>Cesta de la compra</Title>
      <CustomDiv w={'50%'} h={'50px'}>
        <CustomDiv w={'10%'} h={'100%'}>
          <Paragraph>Imagen</Paragraph>
        </CustomDiv>
        <CustomDiv
          w={'60%'}
          h={'100%'}
          jc={'flex-start'}
          padding={'0 var(--rtc-padding-s)'}
        >
          <Paragraph>Titulo</Paragraph>
        </CustomDiv>
        <CustomDiv w={'10%'} h={'100%'}>
          <Paragraph>Precio</Paragraph>
        </CustomDiv>
        <CustomDiv w={'20%'} h={'100%'}>
          <Paragraph>Añadir/Quitar</Paragraph>
        </CustomDiv>
      </CustomDiv>
      {cartBooks ? (
        cartBooks.map((book) => (
          <CustomDiv key={book.id} dir={'row'} w={'50%'} h={'110px'}>
            <CustomDiv w={'10%'} h={'100%'}>
              <Image
                src={book.cover}
                alt={book.title}
                w={'75px'}
                h={'100px'}
              ></Image>
            </CustomDiv>
            <CustomDiv
              w={'60%'}
              h={'100%'}
              jc={'flex-start'}
              padding={'0 var(--rtc-padding-s)'}
            >
              <Paragraph>{book.title}</Paragraph>
            </CustomDiv>
            <CustomDiv w={'10%'} h={'100%'}>
              <Paragraph>{book.price} €</Paragraph>
            </CustomDiv>
            <CustomDiv w={'20%'} h={'100%'} gap={'var(--rtc-gap-xxs)'}>
              <ButtonTotal>-</ButtonTotal>
              <Paragraph>{book.quantity}</Paragraph>
              <ButtonTotal>+</ButtonTotal>
            </CustomDiv>
          </CustomDiv>
        ))
      ) : (
        <Paragraph>No hay articulos en la cesta</Paragraph>
      )}
    </StyledBasket>
  )
}

export default Basket
