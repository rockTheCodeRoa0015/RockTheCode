import styled from 'styled-components'

const StyledButtonTotal = styled.button`
  width: 40px;
  height: 40px;
  font-size: 25px;
  border-radius: var(--rtc-border-radius-button);
  border: none;
  background-color: var(--rtc-background-green);
  cursor: pointer;
  color: var(--rtc-color-white);
  &:hover {
    background-color: var(--rtc-background-greenHover);
  }
  &:disabled {
    background-color: var(--rtc-color-grey);
    cursor: default;
  }
`

export default StyledButtonTotal
