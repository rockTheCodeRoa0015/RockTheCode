import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <header className='header'>
      <div className='menu'>
        <img
          src='/img/menu2.png'
          alt='menu'
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className='logo'>Filmafinity</div>
      <div className='nav'>
        <Navbar show={showNav} setShowNav={setShowNav}></Navbar>
      </div>
    </header>
  )
}

export default Header
