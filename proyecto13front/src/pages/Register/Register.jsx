import CustomDiv from '../../components/CustomDiv/CustomDiv'
import FormRegister from '../../components/FormRegister/FormRegister'
import Title from '../../components/Title/Title'
import StyledRegister from './Register.style'

const Register = () => {
  return (
    <StyledRegister>
      <CustomDiv
        dir={'column'}
        bg={'var(--rtcbackground--form)'}
        w={'300px'}
        br={'var(--rtc-border-radius-button)'}
        gap={'var(--rtc-gap-s)'}
        padding={'0 0 var(--rtc-padding-s) 0'}
      >
        <Title
          pt={'var(--rtc-padding-xs)'}
          color={'var(--rtc-color-white)'}
          fs={'20px'}
        >
          Registro
        </Title>
        <FormRegister></FormRegister>
      </CustomDiv>
    </StyledRegister>
  )
}

export default Register
