import StyledNavBarDiv from './NavBarDiv.style'

const NavBarDiv = ({ children, toggle }) => {
  return <StyledNavBarDiv toggle={toggle}>{children}</StyledNavBarDiv>
}

export default NavBarDiv
