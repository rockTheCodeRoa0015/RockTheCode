import { NavLink } from 'react-router-dom'
import StyledCart from './Cart.style'
import NumCart from './NumCart'
import { toggleMenuClose } from '../../utils/toggleMenu'
import { useContext } from 'react'
import { LoginContext } from '../../provider/LoginProvider'

const Cart = ({ setToggle }) => {
  const { isLogin } = useContext(LoginContext)
  return (
    <>
      <NavLink to={isLogin ? '/basket' : '/login'}>
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
