import Cart from '../Cart/Cart'
import CustomDiv from '../CustomDiv/CustomDiv'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Profile from '../Profile/Profile'
import Search from '../Search/Search'
import StyledHeader from './Header.style'

const Header = () => {
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
          <Profile></Profile>
        </CustomDiv>
        <CustomDiv w={'10%'}>
          <Cart></Cart>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv>
        <Nav></Nav>
      </CustomDiv>
    </StyledHeader>
  )
}

export default Header
