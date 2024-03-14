import styled from 'styled-components'

const StyledNav = styled.nav`
  padding-top: ${(props) => props.padding || '0'};
  width: ${(props) => props.w || 'auto'};
`

export default StyledNav
