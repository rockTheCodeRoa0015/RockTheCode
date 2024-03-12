import { toggleMenu } from '../../utils/toggleMenu'
import StyledMenu from './Menu.style'

const Menu = ({ toggle, setToggle }) => {
  return (
    <StyledMenu
      src='../assets/menu2.png'
      alt='menu'
      onClick={() => toggleMenu(toggle, setToggle)}
    ></StyledMenu>
  )
}

export default Menu
