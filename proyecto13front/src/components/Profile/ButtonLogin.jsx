import React from 'react'
import StyledButtonLogin from './ButtonLogin.style'
import { toggleMenuClose } from '../../utils/toggleMenu'
import { useNavigate } from 'react-router-dom'

const ButtonLogin = ({ setToggle }) => {
  let navigate = useNavigate()

  const login = () => {
    if (setToggle !== undefined) {
      toggleMenuClose(setToggle)
    }
    navigate('/login')
  }
  return <StyledButtonLogin onClick={login}>Login</StyledButtonLogin>
}

export default ButtonLogin
