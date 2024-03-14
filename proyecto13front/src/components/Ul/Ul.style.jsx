import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--rtc-gap-m);
  ${tablet} {
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--rtc-background-green);
  }
  ${mobile} {
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--rtc-background-green);
  }
`

export default StyledUl
