import React, { useContext } from 'react'
import StyledLi from './Li.style'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'
import { NavLink } from 'react-router-dom'

const Li = ({ children, link, action }) => {
  const { toggle, setToggle } = useContext(ToggleMenuContext)

  const funcLi = () => {
    if (action === 'menu') {
      setToggle(false)
    }
  }

  return (
    <StyledLi toggle={toggle ? 'open' : 'close'}>
      <NavLink to={link} onClick={funcLi}>
        {children}
      </NavLink>
    </StyledLi>
  )
}

export default Li
