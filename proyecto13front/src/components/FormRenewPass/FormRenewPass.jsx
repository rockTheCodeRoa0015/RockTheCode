import CustomDiv from '../CustomDiv/CustomDiv'
import Paragraph from '../Paragraph/Paragraph'
import StyledFormRenewPass from './FormRenewPass.style'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { renewPass } from '../../api/userApi'
import useCustomMsg from '../../customHooks/useCustomMsg'

const FormRenewPass = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      userNameRenew: '',
      mailRenew: '',
      passRenew: '',
      confirmPassRenew: ''
    }
  })

  const { msg, setMsg, error, setError } = useCustomMsg()

  let navigate = useNavigate()

  const onSubmit = async (values) => {
    const res = await renewPass(
      values.userNameRenew,
      values.mailRenew,
      values.passRenew
    )

    if (res.mensaje) {
      setMsg(res.mensaje)
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } else {
      setError(res)
    }
  }

  const pass = watch('passRenew')

  return (
    <StyledFormRenewPass onSubmit={handleSubmit(onSubmit)}>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='userNameRenew'
          type='text'
          placeholder='Nombre de usuario'
          {...register('userNameRenew', {
            required: {
              value: true,
              message: 'El nombre del usuario es obligatorio'
            }
          })}
        ></input>
        {formState.errors.userNameRenew ? (
          <CustomDiv>
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.userNameRenew.message}
            </Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='mailRenew'
          type='text'
          placeholder='E-mail'
          {...register('mailRenew', {
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
        {formState.errors.mailRenew ? (
          <CustomDiv>
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.mailRenew.message}
            </Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='passRenew'
          placeholder='Contraseña'
          type='password'
          {...register('passRenew', {
            required: {
              value: true,
              message: 'La contraseña es obligatoria'
            }
          })}
        ></input>
        {formState.errors.passRenew ? (
          <CustomDiv>
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.passRenew.message}
            </Paragraph>
          </CustomDiv>
        ) : null}
      </CustomDiv>
      <CustomDiv dir={'column'} w={'100%'} gap={'var(--rtc-gap-xs)'}>
        <input
          id='confirmPassRenew'
          placeholder='Confirmar contraseña'
          type='password'
          {...register('confirmPassRenew', {
            required: {
              value: true,
              message: 'La confirmación de contraseña es obligatoria'
            },
            validate: (value) =>
              value !== pass ? 'Las contraseñas no coinciden' : null
          })}
        ></input>
        {formState.errors.confirmPassRenew ? (
          <CustomDiv>
            <Paragraph
              color={'var(--rtc-color-error)'}
              fontweight={'bold'}
              textalign={'center'}
              textshadow={'var(--rtc-textShadow)'}
            >
              {formState.errors.confirmPassRenew.message}
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
      {msg ? (
        <CustomDiv>
          <Paragraph
            color={'var(--rtc-color-white)'}
            fontweight={'bold'}
            textalign={'center'}
          >
            {msg}
          </Paragraph>
        </CustomDiv>
      ) : null}
      <Button type={'submit'}>Enviar</Button>
    </StyledFormRenewPass>
  )
}

export default FormRenewPass
