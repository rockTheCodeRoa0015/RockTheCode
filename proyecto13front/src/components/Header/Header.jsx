import { useContext } from 'react'
import { LoginContext } from '../../provider/LoginProvider'
import Cart from '../Cart/Cart'
import CustomDiv from '../CustomDiv/CustomDiv'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import StyledHeader from './Header.style'
import MyCount from '../MyCount/MyCount'
import ButtonLogin from '../ButtonLogin/ButtonLogin'

const Header = () => {
  const { isLogin } = useContext(LoginContext)
  return (
    <StyledHeader>
      <CustomDiv w={'1100px'}>
        <CustomDiv w={'20%'}>
          <Logo></Logo>
        </CustomDiv>
        <CustomDiv w={'60%'} pos={'relative'}>
          <Search></Search>
        </CustomDiv>
        <CustomDiv w={'10%'}>
          {isLogin ? <MyCount></MyCount> : <ButtonLogin></ButtonLogin>}
        </CustomDiv>
        <CustomDiv w={'10%'}>
          <Cart></Cart>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv>
        <Nav padding={'var(--rtc-padding-xxs);'}></Nav>
      </CustomDiv>
    </StyledHeader>
  )
}

export default Header
