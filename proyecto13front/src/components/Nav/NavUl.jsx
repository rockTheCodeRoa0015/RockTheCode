import NavLi from './NavLi'
import StyledNavUl from './NavUl.style'

const NavUl = () => {
  return (
    <StyledNavUl>
      <NavLi link={'/'}>Inicio</NavLi>
      <NavLi link={'/books/all'}>Géneros Literarios</NavLi>
      <NavLi link={'/books/infantil'}>Infantil</NavLi>
      <NavLi link={'/books/manga'}>Manga/Cómic</NavLi>
    </StyledNavUl>
  )
}

export default NavUl
