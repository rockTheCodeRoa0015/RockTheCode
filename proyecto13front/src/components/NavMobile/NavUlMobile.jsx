import React from 'react'
import StyledNavUlMobile from './NavUlMobile.style'
import NavLiMobile from './NavLiMobile'

const NavUlMobile = () => {
  return (
    <StyledNavUlMobile>
      <NavLiMobile link={'/'}>Inicio</NavLiMobile>
      <NavLiMobile link={'/books/all'}>Géneros Literarios</NavLiMobile>
      <NavLiMobile link={'/books/infantil'}>Infantil</NavLiMobile>
      <NavLiMobile link={'/books/manga'}>Manga/Cómic</NavLiMobile>
    </StyledNavUlMobile>
  )
}

export default NavUlMobile
