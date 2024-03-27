import CustomDiv from '../CustomDiv/CustomDiv'
import Paragraph from '../Paragraph/Paragraph'
import StyledFormRegister from './FormRegister.style'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { login, registerUser } from '../../api/userApi'
import { LoginContext } from '../../provider/LoginProvider'
import useCustomMsg from '../../customHooks/useCustomMsg'
import { saveLoginData } from '../../utils/loginFunctions'

const FormRegister = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      userNameRegister: '',
      mailRegister: '',
      passRegister: '',
      confirmPass: ''
    }
  })

  const { error, setError } = useCustomMsg()

  const { logoned } = useContext(LoginContext)

  let navigate = useNavigate()

  const onSubmit = async (values) => {
    const resRegister = await registerUser(
      values.userNameRegister,
      values.mailRegister,
      values.passRegister
    )
    if (resRegister.status === 201) {
      const res = await login(values.userNameRegister, values.passRegister)
      if (res.user) {
        saveLoginData(res)
        logoned()
        navigate('/')
      } else {
        setError(res)
      }
    } else {
      setError(resRegister)
    }
  }

  const pass = watch('passRegister')

  return (
    <StyledFormRegister onSubmit={handleSubmit(onSubmit)}>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='userNameRegister'
          type='text'
          placeholder='Nombre de usuario'
          {...register('userNameRegister', {
            required: {
              value: true,
              message: 'El nombre del usuario es obligatorio'
            }
          })}
        ></input>
        {formState.errors.userNameRegister ? (
          <CustomDiv>
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.userNameRegister.message}
            </Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='mailRegister'
          type='text'
          placeholder='E-mail'
          {...register('mailRegister', {
            required: {
              value: true,
              message: 'El e-mail es obligatorio'
            },
            pattern: {
              value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              message: 'El correo electrónico no es valido'
            }
          })}
        ></input>
        {formState.errors.mailRegister ? (
          <CustomDiv>
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.mailRegister.message}
            </Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='passRegister'
          placeholder='Contraseña'
          type='password'
          {...register('passRegister', {
            required: {
              value: true,
              message: 'La contraseña es obligatoria'
            }
          })}
        ></input>
        {formState.errors.passRegister ? (
          <CustomDiv>
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.passRegister.message}
            </Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='confirmPass'
          placeholder='Confirmar contraseña'
          type='password'
          {...register('confirmPass', {
            required: {
              value: true,
              message: 'La confirmación de contraseña es obligatoria'
            },
            validate: (value) =>
              value !== pass ? 'Las contraseñas no coinciden' : null
          })}
        ></input>
        {formState.errors.confirmPass ? (
          <CustomDiv>
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.confirmPass.message}
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
      <Button type={'submit'}>Registrar</Button>
    </StyledFormRegister>
  )
}

export default FormRegister
