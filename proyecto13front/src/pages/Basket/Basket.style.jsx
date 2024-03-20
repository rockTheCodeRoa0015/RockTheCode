import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledBasket = styled.section`
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > div:nth-child(odd) {
    background-color: var(--rtc-color-grey);
  }
  > div:nth-child(even) {
    background-color: var(--rtc-color-lightgrey);
  }
  > div:last-child {
    background-color: transparent;
  }

  ${tablet} {
    > div {
      width: 80%;
    }
  }
  ${mobile} {
    > div {
      width: 90%;
    }
  }
`

export default StyledBasket
