import styled from 'styled-components'
import { mobile } from '../../constants/mediasqueries'

const StyledMuyCount = styled.p`
  padding: var(--rtc-padding-xs) var(--rtc-padding-xxs);
  width: 100%;
  border-radius: var(--rtc-border-radius-button);
  border: none;
  color: var(--rtc-color-white);
  text-align: center;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: var(--rtc-background-greenHover);
  }
  ${mobile} {
    font-size: 15px;
  }
`

export default StyledMuyCount
