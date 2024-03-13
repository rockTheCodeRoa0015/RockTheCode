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
  p {
    color: var(--rtc-color-error);
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
      -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  }
`

export default StyledFormLogin
