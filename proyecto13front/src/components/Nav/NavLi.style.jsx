import styled from 'styled-components'

const StyledNavLi = styled.li`
  list-style: none;
  color: var(--rtc-color-white);
  padding: var(--rtc-padding-xxs);
  cursor: pointer;
  &:hover {
    background-color: var(--rtc-background-greenHover);
    border-radius: var(--rtc-border-radius-button);
  }
`

export default StyledNavLi
