import styled from 'styled-components'

const StyledDivMenuList = styled.div`
  //display: flex;
  display: ${(props) => (props.toggle === 'close' ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /*/ width: ${(props) => (props.toggle === 'close' ? '0px' : '250px')};*/
  width: 250px;
  position: absolute;
  left: 0;
  top: 90px;
  z-index: 99;
  /*transition: all 0.5s ease-out;*/
`

export default StyledDivMenuList
