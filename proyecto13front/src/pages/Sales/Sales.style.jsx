import styled from 'styled-components'

const StyledSales = styled.section`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:nth-child(odd) {
    background-color: var(--rtc-color-grey);
  }
  > div:nth-child(even) {
    background-color: var(--rtc-color-lightgrey);
  }
  > div:last-child {
    background-color: transparent;
  }
`

export default StyledSales
