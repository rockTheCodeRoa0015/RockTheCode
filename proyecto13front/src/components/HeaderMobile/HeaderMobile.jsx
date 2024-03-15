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
import { ListNavHeaderMobile } from '../../constants/dataListNav'

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
        <CustomDiv w={'30%'}>
          {isLogin ? (
            <CustomDiv w={'100%'} pos={'relative'}>
              <MyCount></MyCount>
            </CustomDiv>
          ) : (
            <ButtonLogin></ButtonLogin>
          )}
        </CustomDiv>
        <CustomDiv w={'20%'}>
          <Cart></Cart>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv pos={'relative'} w={'90%'}>
        <Search></Search>
      </CustomDiv>
      <DivMenuList>
        <Nav list={ListNavHeaderMobile} w={'100%'}></Nav>
      </DivMenuList>
    </StyledHeaderMobile>
  )
}

export default HeaderMobile
