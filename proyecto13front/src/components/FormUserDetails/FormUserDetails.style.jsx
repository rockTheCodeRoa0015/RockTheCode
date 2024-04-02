import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledFormUserDetails = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--rtc-gap-s);
  width: 900px;
  margin-top: var(--rtc-margin-s);
  padding-bottom: var(--rtc-padding-s);
  input,
  select {
    width: 90%;
    padding: var(--rtc-padding-xs);
    border-radius: var(--rtc-border-radius-button);
    border: none;
  }

  ${tablet} {
    width: 450px;
  }
  ${mobile} {
    width: 350px;
    > div {
      flex-direction: column;
      align-items: center;
    }
    > div > div {
      width: 90%;
      padding-bottom: var(--rtc-padding-xs);
    }
  }
`

export default StyledFormUserDetails
