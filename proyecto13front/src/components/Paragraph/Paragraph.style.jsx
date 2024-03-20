import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: ${(props) => props.fontsize || 'medium'};
  padding: ${(props) => props.padding || '0'};
  background-color: ${(props) => props.bg || 'transparent'};
  cursor: ${(props) => props.cursor || 'default'};
  border-radius: ${(props) => props.radius || '0'};
  color: ${(props) => props.color || 'var(--rtc-color-black)'};
  font-weight: ${(props) => props.fontweight || 'normal'};
  text-align: ${(props) => props.textalign || 'left'};
  text-shadow: ${(props) => props.textshadow || 'none'};
  &:hover {
    background-color: ${(props) => props.bgh || 'transparent'};
  }
`

export default StyledParagraph
