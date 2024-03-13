import { useParams } from 'react-router-dom'
import StyledBookDetail from './BookDetail.style'
import { useEffect, useState } from 'react'
import CustomDiv from '../../components/CustomDiv/CustomDiv'
import Image from '../../components/Image/Image'
import SubTitle from '../../components/SubTitle/SubTitle'
import Paragraph from '../../components/Paragraph/Paragraph'
import Button from '../../components/Button/Button'
import { getBookDetails } from '../../api/bookDetailApi'

const BookDetail = () => {
  const { id } = useParams()
  const [book, setBook] = useState()
  const [categorie, setCategorie] = useState()

  useEffect(() => {
    getBookDetails(id, setBook, setCategorie)
  }, [])

  return (
    <StyledBookDetail>
      {categorie && (
        <>
          <CustomDiv w={'420px'}>
            <Image
              src={book.cover}
              alt={book.title}
              h={'600px'}
              w={'400px'}
            ></Image>
          </CustomDiv>
          <CustomDiv
            w={'30%'}
            dir={'column'}
            ai={'flex-start'}
            gap={'var(--rtc-gap-xs)'}
          >
            <SubTitle>{book.title}</SubTitle>
            <Paragraph>{book.author}</Paragraph>
            <Paragraph
              padding={'var(--rtc-padding-xxs) var(--rtc-padding-xs)'}
              bg={'var(--rtc-background-green)'}
              radius={'var(--rtc-border-radius-button)'}
              color={'var(--rtc-color-white)'}
            >
              {categorie.categorie}
            </Paragraph>
            <Paragraph>{book.price} €</Paragraph>
            <Paragraph>{book.synopsis}</Paragraph>
            <Paragraph
              padding={'var(--rtc-padding-xxs) var(--rtc-padding-xs)'}
              bg={
                book.stock !== 0
                  ? 'var(--rtc-background-green)'
                  : 'var(--rtc-color-grey)'
              }
              radius={'var(--rtc-border-radius-button)'}
              color={
                book.stock !== 0
                  ? 'var(--rtc-color-white)'
                  : 'var(--rtc-color-black)'
              }
            >
              stock
            </Paragraph>
            <Button bg={'var(--rtc-color-add)'} disable={book.stock}>
              Añadir cesta
            </Button>
          </CustomDiv>
        </>
      )}
    </StyledBookDetail>
  )
}

export default BookDetail
