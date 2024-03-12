import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledSearch = styled.input`
  width: 90%;
  padding: var(--rtc-padding-xs);
  border-radius: var(--rtc-border-radius-button);
  border: none;
  ${tablet} {
    width: 100%;
  }
  ${mobile} {
    width: 100%;
  }
`

export default StyledSearch
