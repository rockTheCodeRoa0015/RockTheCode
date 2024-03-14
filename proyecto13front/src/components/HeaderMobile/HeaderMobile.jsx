import Cart from '../Cart/Cart'
import CustomDiv from '../CustomDiv/CustomDiv'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import Search from '../Search/Search'
import StyledHeaderMobile from './HeaderMobile.style'
import MyCount from '../MyCount/MyCount'
import ButtonLogin from '../ButtonLogin/ButtonLogin'
import { LoginContext } from '../../provider/LoginProvider'
import { useContext } from 'react'
import DivMenuList from '../DivMenuList/DivMenuList'
import Nav from '../Nav/Nav'

const HeaderMobile = () => {
  const { isLogin } = useContext(LoginContext)
  return (
    <StyledHeaderMobile>
      <CustomDiv>
        <CustomDiv w={'10%'}>
          <Menu></Menu>
        </CustomDiv>
        <CustomDiv w={'40%'}>
          <Logo></Logo>
        </CustomDiv>
        <CustomDiv w={'20%'}>
          {isLogin ? <MyCount></MyCount> : <ButtonLogin></ButtonLogin>}
        </CustomDiv>
        <CustomDiv w={'30%'}>
          <Cart></Cart>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv pos={'relative'} w={'90%'}>
        <Search></Search>
      </CustomDiv>
      <DivMenuList>
        <Nav action={'menu'} w={'100%'}></Nav>
      </DivMenuList>
    </StyledHeaderMobile>
  )
}

export default HeaderMobile
