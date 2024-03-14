import { NavLink } from 'react-router-dom'
import StyledMuyCount from './MyCount.style'
import { useContext } from 'react'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'

const MyCount = () => {
  const { setToggle } = useContext(ToggleMenuContext)
  return (
    <NavLink to='/profile'>
      <StyledMuyCount onClick={() => setToggle(false)}>
        Mi Cuenta
      </StyledMuyCount>
    </NavLink>
  )
}

export default MyCount
