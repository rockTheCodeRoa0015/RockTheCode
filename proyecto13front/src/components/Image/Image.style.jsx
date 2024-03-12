import styled from 'styled-components'

const StyledImage = styled.img`
  height: ${(props) => props.h || 'auto'};
  width: ${(props) => props.w || 'auto'};
`

export default StyledImage
