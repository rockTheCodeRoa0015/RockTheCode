import ButtonLogin from './ButtonLogin'
import MyCount from './MyCount'

const Profile = ({ setToggle }) => {
  return (
    <>
      {localStorage.getItem('user') ? (
        <MyCount setToggle={setToggle}></MyCount>
      ) : (
        <ButtonLogin setToggle={setToggle}></ButtonLogin>
      )}
    </>
  )
}

export default Profile
