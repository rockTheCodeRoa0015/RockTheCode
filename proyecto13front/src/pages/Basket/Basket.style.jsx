import styled from 'styled-components'

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
`

export default StyledBasket
