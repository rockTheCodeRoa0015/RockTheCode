import { useContext } from 'react'
import StyledMenu from './Menu.style'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'
import { ToggleProfileContext } from '../../provider/ToggleProfileProvider'

const Menu = () => {
  const { toggle, setToggle } = useContext(ToggleMenuContext)
  const { setToggleProfile } = useContext(ToggleProfileContext)
  const funcToggle = () => {
    setToggle(!toggle)
    setToggleProfile(false)
  }
  return (
    <StyledMenu
      src='../assets/menu2.png'
      alt='menu'
      onClick={funcToggle}
    ></StyledMenu>
  )
}

export default Menu
