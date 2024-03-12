import React from 'react'
import StyledNavUlMobile from './NavUlMobile.style'
import NavLiMobile from './NavLiMobile'

const NavUlMobile = ({ toggle, setToggle }) => {
  return (
    <StyledNavUlMobile>
      <NavLiMobile link={'/'} toggle={toggle} setToggle={setToggle}>
        Inicio
      </NavLiMobile>
      <NavLiMobile link={'/books/all'} toggle={toggle} setToggle={setToggle}>
        Géneros Literarios
      </NavLiMobile>
      <NavLiMobile
        link={'/books/infantil'}
        toggle={toggle}
        setToggle={setToggle}
      >
        Infantil
      </NavLiMobile>
      <NavLiMobile link={'/books/manga'} toggle={toggle} setToggle={setToggle}>
        Manga/Cómic
      </NavLiMobile>
    </StyledNavUlMobile>
  )
}

export default NavUlMobile
