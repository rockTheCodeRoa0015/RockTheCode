import { useContext, useEffect, useState } from 'react'
import Title from '../../components/Title/Title'
import StyledBasket from './Basket.style'
import { getDetailCart } from '../../api/cartApi'
import Paragraph from '../../components/Paragraph/Paragraph'
import CustomDiv from '../../components/CustomDiv/CustomDiv'
import Image from '../../components/Image/Image'
import CartFunctions from '../../components/CartFunctions/CartFunctions'
import { DelItemContext } from '../../provider/DelItemProvider'
import { NavLink } from 'react-router-dom'
import { NumCartContext } from '../../provider/NumCartProvider'

const Basket = () => {
  const [cartBooks, setCartBooks] = useState([])
  const [sumTotal, setSumTotal] = useState()
  const { delItem } = useContext(DelItemContext)
  const { numCart } = useContext(NumCartContext)

  useEffect(() => {
    getDetailCart(localStorage.getItem('id'), setCartBooks, setSumTotal)
  }, [delItem, numCart])

  return (
    <StyledBasket>
      <Title>Cesta de la compra</Title>
      <CustomDiv w={'1000px'} h={'50px'}>
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
      {cartBooks.length > 0 ? (
        cartBooks.map((book) => (
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
            <CartFunctions
              numBooks={book.quantity}
              idBook={book.id}
              personalId={book.personalId}
              w={'20%'}
              h={'100%'}
              gap={'var(--rtc-gap-xxs)'}
            ></CartFunctions>
          </CustomDiv>
        ))
      ) : (
        <Paragraph>No hay articulos en la cesta</Paragraph>
      )}
      {cartBooks.length > 0 && (
        <>
          <CustomDiv w={'1000px'} h={'50px'}>
            <CustomDiv w={'10%'} h={'100%'}></CustomDiv>
            <CustomDiv w={'60%'} h={'100%'}></CustomDiv>
            <CustomDiv w={'10%'} h={'100%'}>
              <Paragraph>{sumTotal} €</Paragraph>
            </CustomDiv>
            <CustomDiv w={'20%'} h={'100%'}></CustomDiv>
          </CustomDiv>
          <CustomDiv w={'50%'} margin={'var(--rtc-margin-s)'} jc={'flex-end'}>
            <NavLink to='/purchase'>
              <Paragraph
                bg={'var(--rtc-background-green)'}
                color={'var(--rtc-color-white)'}
                padding={'var(--rtc-padding-xs)'}
                radius={'var(--rtc-border-radius-button)'}
                cursor={'pointer'}
                bgh={'var(--rtc-background-greenHover)'}
              >
                Continuar
              </Paragraph>
            </NavLink>
          </CustomDiv>
        </>
      )}
    </StyledBasket>
  )
}

export default Basket
