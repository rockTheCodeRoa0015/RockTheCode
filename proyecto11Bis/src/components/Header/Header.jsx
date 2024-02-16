import { Link, useNavigate } from 'react-router-dom'
import InputSearch from '../InputSearch/InputSearch'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import './Header.css'

const Header = () => {
  let navigate = useNavigate()
  const routeChange = () => {
    const search = document.querySelector('#inSearch')
    navigate('/search/' + search.value)
    search.value = ''
  }

  const tooggleMenu = () => {
    document.querySelector('.navHeader').classList.toggle('navHeader-show')
  }

  return (
    <header className='flex-container header'>
      <Logo />
      <div className='flex-container search'>
        <InputSearch />
        <img
          src='../../img/lupa.png'
          alt='lupa'
          onClick={() => routeChange()}
        />
      </div>
      <Nav />
      <div className='menu'>
        <img
          src='../../img/menu2.png'
          alt='menu'
          onClick={() => tooggleMenu()}
        />
      </div>
    </header>
  )
}

export default Header
