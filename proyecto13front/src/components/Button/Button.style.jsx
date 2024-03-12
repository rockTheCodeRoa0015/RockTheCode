import styled from 'styled-components'

const StyledButton = styled.button`
  width: 150px;
  border-radius: var(--rtc-border-radius-button);
  border: none;
  background-color: ${(props) => props.bg || 'var(--rtc-background-green)'};
  padding: var(--rtc-padding-xs) 0;
  cursor: pointer;
  color: ${(props) =>
    props.bg ? 'var(--rtc-color-black)' : 'var(--rtc-color-white)'};
  &:hover {
    background-color: ${(props) =>
      props.bg
        ? 'var(--rtc-color-add-hover)'
        : 'var(--rtc-background-greenHover)'};
  }
  &:disabled {
    background-color: var(--rtc-color-grey);
    cursor: default;
  }
`

export default StyledButton
