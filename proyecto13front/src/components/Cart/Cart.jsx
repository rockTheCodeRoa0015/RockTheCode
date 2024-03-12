import { NavLink } from 'react-router-dom'
import StyledCart from './Cart.style'
import NumCart from './NumCart'
import { toggleMenuClose } from '../../utils/toggleMenu'

const Cart = ({ setToggle }) => {
  return (
    <>
      <NavLink to='/basket'>
        <StyledCart
          onClick={() => toggleMenuClose(setToggle)}
          src='../assets/cart.png'
          alt='cesta'
        />
      </NavLink>
      <NumCart></NumCart>
    </>
  )
}

export default Cart
