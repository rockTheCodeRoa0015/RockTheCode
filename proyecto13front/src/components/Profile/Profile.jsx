import { useContext } from 'react'
import ButtonLogin from './ButtonLogin'
import MyCount from './MyCount'
import { LoginContext } from '../../provider/LoginProvider'

const Profile = ({ setToggle }) => {
  const { isLogin } = useContext(LoginContext)
  return (
    <>
      {isLogin ? (
        <MyCount setToggle={setToggle}></MyCount>
      ) : (
        <ButtonLogin setToggle={setToggle}></ButtonLogin>
      )}
    </>
  )
}

export default Profile
