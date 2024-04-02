import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledBasket = styled.section`
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100svh - 190px);
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
      width: 480px;
    }
    > div > div:nth-child(1) {
      width: 100px;
    }

    > div > div:nth-child(2) {
      display: none;
    }
    > div > div:nth-child(3) {
      width: 100px;
    }
    > div > div:nth-child(4) {
      width: 280px;
    }
  }
  ${mobile} {
    > div {
      width: 350px;
    }
    > div > div:nth-child(1) {
      width: 100px;
    }

    > div > div:nth-child(2) {
      display: none;
    }
    > div > div:nth-child(3) {
      width: 70px;
    }
    > div > div:nth-child(4) {
      width: 180px;
    }
  }
`

export default StyledBasket
