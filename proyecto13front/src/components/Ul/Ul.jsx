import React from 'react'
import StyledUl from './Ul.style'
import Li from '../Li/Li'

const Ul = ({ list, dir, ai, bg, padding }) => {
  return (
    <StyledUl dir={dir} ai={ai} bg={bg} padding={padding}>
      {list.map((nav, index) => {
        return (
          <Li key={index} link={nav.path} action={nav.action}>
            {nav.desc}
          </Li>
        )
      })}
    </StyledUl>
  )
}

export default Ul
