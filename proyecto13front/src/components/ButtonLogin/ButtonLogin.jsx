import React, { useContext } from 'react'
import StyledButtonLogin from './ButtonLogin.style'
import { useNavigate } from 'react-router-dom'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'
import { functionButtons } from '../../utils/functionButtons'

const ButtonLogin = () => {
  const { setToggle } = useContext(ToggleMenuContext)
  let navigate = useNavigate()
  return (
    <StyledButtonLogin
      onClick={() => functionButtons('login', setToggle, navigate)}
    >
      Login
    </StyledButtonLogin>
  )
}

export default ButtonLogin
