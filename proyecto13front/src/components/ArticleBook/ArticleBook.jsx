import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import CustomDiv from '../CustomDiv/CustomDiv'
import Image from '../Image/Image'
import Paragraph from '../Paragraph/Paragraph'
import SubTitle from '../SubTitle/SubTitle'
import StyledArticleBook from './ArticleBook.style'
import { useContext } from 'react'
import { LoginContext } from '../../provider/LoginProvider'
import ButtonCart from '../ButtonCart/ButtonCart'

const ArticleBook = ({ Book }) => {
  const { isLogin } = useContext(LoginContext)
  return (
    <StyledArticleBook>
      <Image src={Book.cover} alt={Book.title} h={'300px'} w={'200px'}></Image>
      <CustomDiv pos={'relative'} h={'100px'}>
        <CustomDiv dir={'column'} gap={'var(--rtc-gap-xs)'} h={'100%'}>
          <SubTitle>{Book.title}</SubTitle>
          <Paragraph>{Book.author}</Paragraph>
          <Paragraph>{Book.price} €</Paragraph>
        </CustomDiv>
        <CustomDiv
          dir={'column'}
          gap={'var(--rtc-gap-xs)'}
          display={'none'}
          h={'100%'}
          pos={'absolute'}
          index={'99'}
          bg={'var(--rtc-color-white)'}
        >
          <ButtonCart
            disable={isLogin === false || Book.stock === 0 ? true : false}
            Book={Book}
            num={1}
          >
            Añadir
          </ButtonCart>
          <Link to={`/bookDetail/${Book._id}`}>
            <Button>Detalles</Button>
          </Link>
        </CustomDiv>
      </CustomDiv>
    </StyledArticleBook>
  )
}

export default ArticleBook
