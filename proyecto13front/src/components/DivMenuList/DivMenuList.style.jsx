import styled from 'styled-components'

const StyledDivMenuList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.toggle === 'close' ? '0px' : '250px')};
  position: absolute;
  left: 0;
  top: 10svh;
  z-index: 99;
  transition: all 0.5s ease-out;
`

export default StyledDivMenuList
