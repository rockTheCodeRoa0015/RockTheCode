import React from 'react'
import StyledLogin from './Login.style'
import CustomDiv from '../../components/CustomDiv/CustomDiv'
import Title from '../../components/Title/Title'
import FormLogin from '../../components/FormLogin/FormLogin'
import Paragraph from '../../components/Paragraph/Paragraph'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <StyledLogin>
      <CustomDiv
        dir={'column'}
        bg={'var(--rtcbackground--form)'}
        w={'300px'}
        br={'var(--rtc-border-radius-button)'}
        gap={'var(--rtc-gap-s)'}
        padding={'0 0 var(--rtc-padding-s) 0'}
      >
        <Title
          pt={'var(--rtc-padding-xs)'}
          color={'var(--rtc-color-white)'}
          fs={'20px'}
        >
          Iniciar sesión
        </Title>
        <FormLogin></FormLogin>
        <NavLink to='/renewPass'>
          <Paragraph color={'var(--rtc-color-white)'} cursor={'pointer'}>
            ¿Perdiste tu contraseña?
          </Paragraph>
        </NavLink>
        <NavLink to='/register'>
          <Paragraph color={'var(--rtc-color-white)'} cursor={'pointer'}>
            ¿No tienes cuenta? Registrate
          </Paragraph>
        </NavLink>
      </CustomDiv>
    </StyledLogin>
  )
}

export default Login
