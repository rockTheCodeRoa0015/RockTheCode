import React from 'react'
import StyledUl from './Ul.style'
import Li from '../Li/Li'

const Ul = ({ action }) => {
  return (
    <StyledUl>
      <Li link={'/'} action={action}>
        Inicio
      </Li>
      <Li link={'/books/all'} action={action}>
        Géneros Literarios
      </Li>
      <Li link={'/books/infantil'} action={action}>
        Infantil
      </Li>
      <Li link={'/books/manga'} action={action}>
        Manga/Cómic
      </Li>
    </StyledUl>
  )
}

export default Ul
