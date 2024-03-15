import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledHeaderMobile = styled.header`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--rtc-background-green);
  width: 100%;
  color: var(--rtc-color-white);
  z-index: 99;
  ${tablet} {
    display: flex;
  }
  ${mobile} {
    display: flex;
  }
`

export default StyledHeaderMobile
