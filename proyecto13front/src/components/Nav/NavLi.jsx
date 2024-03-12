import { NavLink } from 'react-router-dom'
import StyledNavLi from './NavLi.style'

const NavLi = ({ children, link }) => {
  return (
    <StyledNavLi>
      <NavLink to={link}>{children}</NavLink>
    </StyledNavLi>
  )
}

export default NavLi
