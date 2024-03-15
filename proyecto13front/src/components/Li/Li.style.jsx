import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledLi = styled.li`
  list-style: none;
  color: var(--rtc-color-white);
  padding: var(--rtc-padding-xxs);
  cursor: pointer;
  &:hover {
    background-color: var(--rtc-background-greenHover);
    border-radius: var(--rtc-border-radius-button);
  }
  /*${tablet} {
    visibility: ${(props) => (props.toggle === 'close' ? 'hidden' : 'visible')};
  }
  ${mobile} {
    visibility: ${(props) => (props.toggle === 'close' ? 'hidden' : 'visible')};
  }*/
`

export default StyledLi
