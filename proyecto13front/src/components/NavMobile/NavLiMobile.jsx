import { NavLink } from 'react-router-dom'
import StyledNavLiMobile from './NavLiMobile.style'
import { useContext } from 'react'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'

const NavLiMobile = ({ children, link }) => {
  const { toggle, setToggle } = useContext(ToggleMenuContext)
  return (
    <StyledNavLiMobile toggle={toggle ? 'open' : 'close'}>
      <NavLink to={link} onClick={() => setToggle(false)}>
        {children}
      </NavLink>
    </StyledNavLiMobile>
  )
}

export default NavLiMobile
