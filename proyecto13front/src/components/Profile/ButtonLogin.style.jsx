import styled from 'styled-components'

const StyledButtonLogin = styled.button`
  padding: var(--rtc-padding-xs) var(--rtc-padding-xxs);
  width: 100%;
  border-radius: var(--rtc-border-radius-button);
  border: none;
  background-color: transparent;
  color: var(--rtc-color-white);
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: var(--rtc-background-greenHover);
  }
`

export default StyledButtonLogin
