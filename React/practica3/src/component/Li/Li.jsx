import { NavLink } from 'react-router-dom'
import './Li.css'

const Li = ({ text, route }) => {
  return (
    <li className='li'>
      <NavLink to={route} activeclassname='active'>
        {text}
      </NavLink>
    </li>
  )
}

export default Li
