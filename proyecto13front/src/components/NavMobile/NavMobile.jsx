import StyledNavMobile from './NavMobile.style'
import NavUlMobile from './NavUlMobile'

const NavMobile = ({ toggle, setToggle }) => {
  return (
    <StyledNavMobile>
      <NavUlMobile toggle={toggle} setToggle={setToggle}></NavUlMobile>
    </StyledNavMobile>
  )
}

export default NavMobile
