import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledPurchase = styled.section`
  margin-top: 140px;
  min-height: calc(100svh - 190px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${tablet} {
    > div {
      width: 450px;
    }
  }
  ${mobile} {
    > div {
      width: 350px;
    }
  }
`

export default StyledPurchase
