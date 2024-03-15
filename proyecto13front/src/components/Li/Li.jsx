import React, { useContext } from 'react'
import StyledLi from './Li.style'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'
import { NavLink } from 'react-router-dom'
import { ToggleProfileContext } from '../../provider/ToggleProfileProvider'
import { clearLocalStorage } from '../../utils/logoutFunction'
import { LoginContext } from '../../provider/LoginProvider'
import { NumCartContext } from '../../provider/NumCartProvider'

const Li = ({ children, link, action }) => {
  const { setToggle } = useContext(ToggleMenuContext)
  const { setToggleProfile } = useContext(ToggleProfileContext)
  const { logout } = useContext(LoginContext)
  const { setNumCart } = useContext(NumCartContext)

  const funcLi = () => {
    if (action === 'menu') {
      setToggle(false)
      setToggleProfile(false)
    } else if (action === 'profile') {
      setToggleProfile(false)
    } else if (action === 'logout') {
      clearLocalStorage()
      setNumCart(0)
      setToggleProfile(false)
      logout()
    } else {
      setToggleProfile(false)
    }
  }

  return (
    <StyledLi>
      <NavLink to={link} onClick={funcLi}>
        {children}
      </NavLink>
    </StyledLi>
  )
}

export default Li
