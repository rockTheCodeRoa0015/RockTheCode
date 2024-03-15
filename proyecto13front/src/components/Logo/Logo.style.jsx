import styled from 'styled-components'
import { mobile } from '../../constants/mediasqueries'

const StyledLogo = styled.h1`
  color: var(--rtc-color-white);
  ${mobile} {
    font-size: larger;
  }
`

export default StyledLogo
