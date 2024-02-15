import { useNavigate, useParams } from 'react-router-dom'
import './Register.css'

const Register = () => {
  let navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 2000)

  const { userName } = useParams()
  return <div className='register'>Bienvenido {userName}</div>
}

export default Register
