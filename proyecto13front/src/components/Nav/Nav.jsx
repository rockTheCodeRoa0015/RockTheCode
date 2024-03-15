import Ul from '../Ul/Ul'
import StyledNav from './Nav.style'

const Nav = ({ list, w, padding, dir, ai, bg, paddingUl }) => {
  return (
    <StyledNav w={w} padding={padding}>
      <Ul list={list} dir={dir} ai={ai} bg={bg} padding={paddingUl}></Ul>
    </StyledNav>
  )
}

export default Nav
