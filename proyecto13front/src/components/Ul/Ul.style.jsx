import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.dir || 'row'};
  justify-content: center;
  align-items: ${(props) => props.ai || 'center'};
  gap: var(--rtc-gap-m);
  background-color: ${(props) => props.bg || 'transparent'};
  ${tablet} {
    flex-direction: ${(props) => props.display || 'column'};
    align-items: ${(props) => props.ai || 'flex-start'};
    background-color: ${(props) => props.bg || 'var(--rtc-background-green)'};
    padding: ${(props) => props.padding || 'var(--rtc-padding-xs)'};
  }
  ${mobile} {
    flex-direction: ${(props) => props.display || 'column'};
    align-items: ${(props) => props.ai || 'flex-start'};
    background-color: ${(props) => props.bg || 'var(--rtc-background-green)'};
    padding: ${(props) => props.padding || 'var(--rtc-padding-xs)'};
  }
`

export default StyledUl
