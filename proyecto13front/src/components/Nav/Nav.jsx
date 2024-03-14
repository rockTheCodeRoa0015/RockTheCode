import Ul from '../Ul/Ul'
import StyledNav from './Nav.style'

const Nav = ({ action, w, padding }) => {
  return (
    <StyledNav w={w} padding={padding}>
      <Ul action={action}></Ul>
    </StyledNav>
  )
}

export default Nav
