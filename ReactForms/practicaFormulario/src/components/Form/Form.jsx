import './Form.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      pass: '',
      confirmPass: ''
    }
  })

  let navigate = useNavigate()

  const onSubmit = (values) => {
    navigate('/register/' + values.userName)
  }

  const pass = watch('pass')

  return (
    <div className='form'>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type='text'
            placeholder='Nombre'
            id='userName'
            {...register('userName', {
              required: {
                value: true,
                message: 'El nombre del usuario es obligatorio'
              },
              minLength: {
                value: 3,
                message: 'El nombre debe tener mínimo 3 caracteres'
              }
            })}
          />
          {formState.errors.userName ? (
            <div className='errors'>
              <p>{formState.errors.userName.message}</p>
            </div>
          ) : null}
        </div>
        <div>
          <input
            type='text'
            id='email'
            placeholder='Email'
            {...register('email', {
              required: {
                value: true,
                message: 'El correo electrónico es obligatorio'
              },
              pattern: {
                value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                message: 'El correo electrónico no es valido'
              }
            })}
          />
          {formState.errors.email ? (
            <div className='errors'>
              <p>{formState.errors.email.message}</p>
            </div>
          ) : null}
        </div>
        <div>
          <input
            type='password'
            id='pass'
            placeholder='Contraseña'
            {...register('pass', {
              required: {
                value: true,
                message: 'La contraseña es obligatoria'
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                message:
                  'La contraseña debe incluir números, letras Mayúsculas y minúsculas, caracteres especiales y debe tener entre 8 y 15 caracteres'
              }
            })}
          />
          {formState.errors.pass ? (
            <div className='errors'>
              <p>{formState.errors.pass.message}</p>
            </div>
          ) : null}
        </div>
        <div>
          <input
            type='password'
            id='confirmPass'
            placeholder='Contraseña'
            {...register('confirmPass', {
              required: {
                value: true,
                message: 'La confirmación de contraseña es obligatoria'
              },
              validate: (value) =>
                value !== pass ? 'Las contraseñas no coinciden' : null
            })}
          />
          {formState.errors.confirmPass ? (
            <div className='errors'>
              <p>{formState.errors.confirmPass.message}</p>
            </div>
          ) : null}
        </div>
        <button type='submit' disabled={!formState.isDirty}>
          Registrar
        </button>
      </form>
    </div>
  )
}

export default Form
