import { useContext } from 'react'
import ButtonLogin from './ButtonLogin'
import MyCount from './MyCount'
import { LoginContext } from '../../provider/LoginProvider'

const Profile = () => {
  const { isLogin } = useContext(LoginContext)
  return <>{isLogin ? <MyCount></MyCount> : <ButtonLogin></ButtonLogin>}</>
}

export default Profile
