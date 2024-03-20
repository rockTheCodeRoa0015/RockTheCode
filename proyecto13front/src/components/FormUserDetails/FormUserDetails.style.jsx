import styled from 'styled-components'

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
`

export default StyledFormUserDetails
