import styled from 'styled-components'
import { mobile } from '../../constants/mediasqueries'

const StyledCart = styled.img`
  height: 40px;
  filter: invert(100%);
  ${mobile} {
    height: 30px;
  }
`

export default StyledCart
