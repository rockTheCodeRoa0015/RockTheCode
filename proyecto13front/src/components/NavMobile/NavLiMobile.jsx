import { NavLink } from 'react-router-dom'
import StyledNavLiMobile from './NavLiMobile.style'
import { toggleMenuClose } from '../../utils/toggleMenu'

const NavLiMobile = ({ children, link, toggle, setToggle }) => {
  return (
    <StyledNavLiMobile
      onClick={() => toggleMenuClose(setToggle)}
      toggle={toggle}
    >
      <NavLink to={link}>{children}</NavLink>
    </StyledNavLiMobile>
  )
}

export default NavLiMobile
