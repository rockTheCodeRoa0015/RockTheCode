import React, { useContext } from 'react'
import StyledDivMenuList from './DivMenuList.style'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'

const DivMenuList = ({ children }) => {
  const { toggle } = useContext(ToggleMenuContext)
  return (
    <StyledDivMenuList toggle={toggle ? 'open' : 'close'}>
      {children}
    </StyledDivMenuList>
  )
}

export default DivMenuList
