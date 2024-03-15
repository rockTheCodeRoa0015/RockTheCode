import React, { useContext } from 'react'
import StyledButtonLogin from './ButtonLogin.style'
import { useNavigate } from 'react-router-dom'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'

const ButtonLogin = () => {
  const { setToggle } = useContext(ToggleMenuContext)
  let navigate = useNavigate()

  const logoutFunc = () => {
    setToggle(false)
    navigate('/login')
  }
  return <StyledButtonLogin onClick={logoutFunc}>Login</StyledButtonLogin>
}

export default ButtonLogin
