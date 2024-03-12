import styled from 'styled-components'

const StyledArticleBook = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 400px;
  transition: all 0.5s ease-out;
  margin-bottom: var(--rtc-margin-xs);
  &:hover > div > div:last-child {
    display: flex;
  }
`

export default StyledArticleBook
