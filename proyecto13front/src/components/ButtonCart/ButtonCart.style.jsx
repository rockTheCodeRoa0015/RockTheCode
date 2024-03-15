import styled from 'styled-components'

const StyledButtonCart = styled.button`
  width: 150px;
  border-radius: var(--rtc-border-radius-button);
  border: none;
  background-color: var(--rtc-color-add);
  padding: var(--rtc-padding-xs) 0;
  cursor: pointer;
  color: 'var(--rtc-color-black)';
  &:hover {
    background-color: var(--rtc-color-add-hover);
  }
  &:disabled {
    background-color: var(--rtc-color-grey);
    cursor: default;
  }
`

export default StyledButtonCart
