import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: medium;
  padding: ${(props) => props.padding || '0'};
  background-color: ${(props) => props.bg || 'transparent'};
  cursor: ${(props) => props.cursor || 'default'};
  border-radius: ${(props) => props.radius || '0'};
  color: ${(props) => props.color || 'var(--rtc-color-black)'};
`

export default StyledParagraph
