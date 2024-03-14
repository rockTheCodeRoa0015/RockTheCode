import { useContext } from 'react'
import StyledNavBarDiv from './NavBarDiv.style'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'

const NavBarDiv = ({ children }) => {
  const { toggle } = useContext(ToggleMenuContext)
  return (
    <StyledNavBarDiv toggle={toggle ? 'open' : 'close'}>
      {children}
    </StyledNavBarDiv>
  )
}

export default NavBarDiv
