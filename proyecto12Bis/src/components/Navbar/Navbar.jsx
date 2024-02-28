import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ show, setShowNav }) => {
  return (
    <nav className={show ? 'navbar-show' : 'navbar'}>
      <ul>
        <li>
          <NavLink
            to='/'
            activeclassname='active'
            onClick={() => setShowNav(false)}
          >
            Peliculas
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/fav'
            activeclassname='active'
            onClick={() => setShowNav(false)}
          >
            Favoritos
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sug'
            activeclassname='active'
            onClick={() => setShowNav(false)}
          >
            Sugerencias
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
