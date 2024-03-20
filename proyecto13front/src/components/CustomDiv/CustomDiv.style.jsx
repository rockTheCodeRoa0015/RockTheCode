import styled from 'styled-components'

const StyledCustomDiv = styled.div`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.dir || 'row'};
  justify-content: ${(props) => props.jc || 'center'};
  align-items: ${(props) => props.ai || 'center'};
  width: ${(props) => props.w || '100%'};
  height: ${(props) => props.h || 'auto'};
  position: ${(props) => props.pos || 'static'};
  left: ${(props) => props.left || '0'};
  top: ${(props) => props.top || '0'};
  z-index: ${(props) => props.index || '0'};
  gap: ${(props) => props.gap || '0'};
  background-color: ${(props) => props.bg || 'transparent'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  border-radius: ${(props) => props.br || 'none'};
  padding: ${(props) => props.padding || '0'};
  border: ${(props) => props.border || 'none'};
  margin: ${(props) => props.margin || 'none'};
`

export default StyledCustomDiv
