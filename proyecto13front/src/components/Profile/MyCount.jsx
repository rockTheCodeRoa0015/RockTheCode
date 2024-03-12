import { NavLink } from 'react-router-dom'
import StyledMuyCount from './MyCount.style'
import { toggleMenuClose } from '../../utils/toggleMenu'

const MyCount = ({ setToggle }) => {
  return (
    <NavLink to='/profile'>
      <StyledMuyCount href='#' onClick={() => toggleMenuClose(setToggle)}>
        Mi Cuenta
      </StyledMuyCount>
    </NavLink>
  )
}

export default MyCount
