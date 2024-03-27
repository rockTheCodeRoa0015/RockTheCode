import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledDivMyCountList = styled.div`
  display: ${(props) => (props.toggleprofile === 'close' ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 200px;
  background-color: var(--rtc-background-greenHover);
  position: absolute;
  top: 50px;
  z-index: 100;
  border-radius: var(--rtc-border-radius-button);
  ${tablet} {
    top: 80px;
  }
  ${mobile} {
    top: 75px;
  }
`

export default StyledDivMyCountList
