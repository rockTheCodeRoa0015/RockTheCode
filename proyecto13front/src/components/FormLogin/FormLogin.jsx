import React, { useContext } from 'react'
import StyledFormLogin from './FormLogin.style'
import { useForm } from 'react-hook-form'
import CustomDiv from '../CustomDiv/CustomDiv'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'
import { login } from '../../api/userApi'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../provider/LoginProvider'
import { NumCartContext } from '../../provider/NumCartProvider'
import { getCartByPersonalId } from '../../api/cartApi'
import useCustomMsg from '../../customHooks/useCustomMsg'
import { saveLoginData } from '../../utils/loginFunctions'

const FormLogin = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      userNameLogin: '',
      passLogin: ''
    }
  })

  const { error, setError } = useCustomMsg()

  const { logoned } = useContext(LoginContext)
  const { setNumCart } = useContext(NumCartContext)

  let navigate = useNavigate()

  const onSubmit = async (values) => {
    const res = await login(values.userNameLogin, values.passLogin)
    if (res.user) {
      saveLoginData(res)
      logoned()
      const num = await getCartByPersonalId(res.user.id)
      if (num !== 0) {
        setNumCart(num)
      }
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
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.userNameLogin.message}
            </Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='passLogin'
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
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.passLogin.message}
            </Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      {error ? (
        <CustomDiv>
          <Paragraph
            color={'var(--rtc-color-error)'}
            fontweight={'bold'}
            textalign={'center'}
            textshadow={'var(--rtc-textShadow)'}
          >
            {error}
          </Paragraph>
        </CustomDiv>
      ) : null}
      <Button type={'submit'}>Iniciar</Button>
    </StyledFormLogin>
  )
}

export default FormLogin
