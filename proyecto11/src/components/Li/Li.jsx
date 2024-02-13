import { NavLink } from 'react-router-dom'
import './Li.css'

const Li = ({ text, route }) => {
  const hideMenu = () => {
    if (document.querySelector('.navHeader').classList.length !== 1) {
      document.querySelector('.navHeader').classList.toggle('navHeader-show')
    }
  }

  return (
    <li className='li' onClick={() => hideMenu()}>
      <NavLink to={route} activeclassname='active'>
        {text}
      </NavLink>
    </li>
  )
}

export default Li
