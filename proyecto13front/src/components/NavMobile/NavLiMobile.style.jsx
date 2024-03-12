import styled from 'styled-components'

const StyledNavLiMobile = styled.li`
  list-style: none;
  color: var(--rtc-color-white);
  padding: var(--rtc-padding-xxs);
  cursor: pointer;
  visibility: ${(props) => (props.toggle === 'close' ? 'hidden' : 'visible')};
  &:hover {
    background-color: var(--rtc-background-greenHover);
    border-radius: var(--rtc-border-radius-button);
  }
`

export default StyledNavLiMobile
