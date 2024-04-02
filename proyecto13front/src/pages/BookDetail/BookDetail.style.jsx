import styled from 'styled-components'
import { mobile, tablet } from '../../constants/mediasqueries'

const StyledBookDetail = styled.section`
  margin-top: 140px;
  min-height: calc(100svh - 190px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: var(--rtc-padding-xs);
  ${tablet} {
    flex-direction: column;
    align-items: center;
    > div:last-child {
      width: 60%;
    }
  }
  ${mobile} {
    flex-direction: column;
    align-items: center;
    > div:last-child {
      width: 60%;
    }

    img {
      height: 300px;
      width: 200px;
    }
  }
`

export default StyledBookDetail
