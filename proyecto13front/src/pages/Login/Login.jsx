import React from 'react'
import StyledLogin from './Login.style'
import CustomDiv from '../../components/CustomDiv/CustomDiv'
import Title from '../../components/Title/Title'
import FormLogin from '../../components/FormLogin/FormLogin'

const Login = () => {
  return (
    <StyledLogin>
      <CustomDiv
        dir={'column'}
        bg={'var(--rtcbackground--form)'}
        w={'300px'}
        br={'var(--rtc-border-radius-button)'}
        gap={'var(--rtc-gap-s)'}
      >
        <Title pt={'var(--rtc-padding-xs)'} color={'var(--rtc-color-white)'}>
          Registro
        </Title>
        <FormLogin></FormLogin>
      </CustomDiv>
    </StyledLogin>
  )
}

export default Login
