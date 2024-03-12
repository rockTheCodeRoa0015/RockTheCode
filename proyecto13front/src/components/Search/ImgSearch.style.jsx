import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledImgSearch = styled.img`
  height: 25px;
  position: absolute;
  top: 5px;
  right: 45px;
  cursor: pointer;
  ${tablet} {
    right: 15px;
  }
  ${mobile} {
    right: 15px;
  }
`

export default StyledImgSearch
