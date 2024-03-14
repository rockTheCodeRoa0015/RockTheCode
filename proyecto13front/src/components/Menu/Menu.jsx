import { useContext } from 'react'
import StyledMenu from './Menu.style'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'

const Menu = () => {
  const { toggle, setToggle } = useContext(ToggleMenuContext)
  return (
    <StyledMenu
      src='../assets/menu2.png'
      alt='menu'
      onClick={() => setToggle(!toggle)}
    ></StyledMenu>
  )
}

export default Menu
