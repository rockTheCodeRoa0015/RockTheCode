import CustomDiv from '../../components/CustomDiv/CustomDiv'
import FormProfile from '../../components/FormProfile/FormProfile'
import Title from '../../components/Title/Title'
import StyledProfile from './Profile.style'

const Profile = () => {
  return (
    <StyledProfile>
      <CustomDiv
        dir={'column'}
        bg={'var(--rtcbackground--form)'}
        w={'900px'}
        br={'var(--rtc-border-radius-button)'}
        gap={'var(--rtc-gap-s)'}
        padding={'0 0 var(--rtc-padding-s) 0'}
      >
        <Title
          pt={'var(--rtc-padding-xs)'}
          color={'var(--rtc-color-white)'}
          fs={'20px'}
        >
          Perfil
        </Title>
        <FormProfile></FormProfile>
      </CustomDiv>
    </StyledProfile>
  )
}

export default Profile
