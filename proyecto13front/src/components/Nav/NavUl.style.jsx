import styled from 'styled-components'

const StyledNavUl = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.dir || 'row'};
  justify-content: center;
  align-items: center;
  gap: var(--rtc-gap-m);
`

export default StyledNavUl
