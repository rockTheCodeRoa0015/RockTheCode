import React from 'react'
import StyledPurchase from './Purchase.style'
import Title from '../../components/Title/Title'
import FormUserDetails from '../../components/FormUserDetails/FormUserDetails'
import CustomDiv from '../../components/CustomDiv/CustomDiv'

const Purchase = () => {
  return (
    <StyledPurchase>
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
          Realizar Compra
        </Title>
        <FormUserDetails></FormUserDetails>
      </CustomDiv>
    </StyledPurchase>
  )
}

export default Purchase
