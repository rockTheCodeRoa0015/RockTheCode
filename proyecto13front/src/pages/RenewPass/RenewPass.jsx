import CustomDiv from '../../components/CustomDiv/CustomDiv'
import FormRenewPass from '../../components/FormRenewPass/FormRenewPass'
import Title from '../../components/Title/Title'
import StyledRenewPass from './RenewPass.style'

const RenewPass = () => {
  return (
    <StyledRenewPass>
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
          Renovar contraseña
        </Title>
        <FormRenewPass></FormRenewPass>
      </CustomDiv>
    </StyledRenewPass>
  )
}

export default RenewPass
