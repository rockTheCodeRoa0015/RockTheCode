import styled from 'styled-components'
import StyledCustomDiv from '../CustomDiv/CustomDiv.style'

const StyledPaginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--rtc-padding-s) 0;
  gap: var(--rtc-gap-s);
  button {
    padding: var(--rtc-padding-xs);
    border-radius: var(--rtc-border-radius-button);
    border: none;
    background-color: var(--rtc-background-green);
    cursor: pointer;
  }

  button:disabled {
    background-color: var(--rtc-color-lightgrey);
    cursor: default;
  }
`

export default StyledPaginator
