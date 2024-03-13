import React, { useContext, useState } from 'react'
import StyledFormLogin from './FormLogin.style'
import { useForm } from 'react-hook-form'
import CustomDiv from '../CustomDiv/CustomDiv'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'
import { login } from '../../api/userApi'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../provider/LoginProvider'

const FormLogin = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      userNameLogin: '',
      passLogin: ''
    }
  })

  const [error, setError] = useState()

  const { logoned } = useContext(LoginContext)

  let navigate = useNavigate()

  const onSubmit = async (values) => {
    const res = await login(values.userNameLogin, values.passLogin)
    if (res.user) {
      localStorage.setItem('token', res.token)
      localStorage.setItem('id', res.user._id)
      logoned()
      navigate('/')
    } else {
      setError(res)
    }
  }

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='userNameLogin'
          type='text'
          placeholder='Nombre de usuario'
          {...register('userNameLogin', {
            required: {
              value: true,
              message: 'El nombre del usuario es obligatorio'
            }
          })}
        ></input>
        {formState.errors.userNameLogin ? (
          <CustomDiv>
            <Paragraph>{formState.errors.userNameLogin.message}</Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='text'
          placeholder='Contraseña'
          type='password'
          {...register('passLogin', {
            required: {
              value: true,
              message: 'La contraseña es obligatoria'
            }
          })}
        ></input>
        {formState.errors.passLogin ? (
          <CustomDiv>
            <Paragraph>{formState.errors.passLogin.message}</Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      {error ? (
        <CustomDiv>
          <Paragraph>{error}</Paragraph>
        </CustomDiv>
      ) : null}
      <Button type={'submit'}>Registrar</Button>
    </StyledFormLogin>
  )
}

export default FormLogin
