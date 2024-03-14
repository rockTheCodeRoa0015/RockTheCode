import styled from 'styled-components'

const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--rtc-gap-s);
  width: 300px;
  padding-bottom: var(--rtc-padding-s);
  input {
    width: 90%;
    padding: var(--rtc-padding-xs);
    border-radius: var(--rtc-border-radius-button);
    border: none;
  }
`

export default StyledFormLogin
