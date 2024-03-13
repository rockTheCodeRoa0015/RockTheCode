import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: 40px;
  padding-bottom: var(--rtc-padding-xs);
  padding-top: ${(props) => props.pt || '0'};
  color: ${(props) => props.color || 'var(--rtc-color-black)'};
`

export default StyledTitle
