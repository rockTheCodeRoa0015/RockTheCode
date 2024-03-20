import styled from 'styled-components'
import StyledButtonTotal from '../ButtonTotal/ButtonTotal.style'

const StyledButtonDelCart = styled(StyledButtonTotal)`
  background-color: var(--rtc-background--del);
  &:hover {
    background-color: var(--rtc-background--delHover);
  }
`

export default StyledButtonDelCart
