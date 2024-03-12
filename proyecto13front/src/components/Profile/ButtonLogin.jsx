import React from 'react'
import StyledButtonLogin from './ButtonLogin.style'
import { toggleMenuClose } from '../../utils/toggleMenu'

const ButtonLogin = ({ setToggle }) => {
  return (
    <StyledButtonLogin onClick={() => toggleMenuClose(setToggle)}>
      Login
    </StyledButtonLogin>
  )
}

export default ButtonLogin
