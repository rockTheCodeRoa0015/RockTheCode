import Cart from '../Cart/Cart'
import CustomDiv from '../CustomDiv/CustomDiv'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import NavMobile from '../NavMobile/NavMobile'
import Profile from '../Profile/Profile'
import Search from '../Search/Search'
import StyledHeaderMobile from './HeaderMobile.style'
import NavBarDiv from '../CustomDiv/NavBarDiv'

const HeaderMobile = () => {
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
          <Profile></Profile>
        </CustomDiv>
        <CustomDiv w={'30%'}>
          <Cart></Cart>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv pos={'relative'} w={'90%'}>
        <Search></Search>
      </CustomDiv>
      <NavBarDiv>
        <NavMobile></NavMobile>
      </NavBarDiv>
    </StyledHeaderMobile>
  )
}

export default HeaderMobile
