import { NavLink } from 'react-router-dom'
import StyledCart from './Cart.style'
import NumCart from './NumCart'
import { useContext } from 'react'
import { LoginContext } from '../../provider/LoginProvider'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'

const Cart = () => {
  const { isLogin } = useContext(LoginContext)
  const { setToggle } = useContext(ToggleMenuContext)
  return (
    <>
      <NavLink to={isLogin ? '/basket' : '/login'}>
        <StyledCart
          onClick={() => setToggle(false)}
          src='../assets/cart.png'
          alt='cesta'
        />
      </NavLink>
      <NumCart></NumCart>
    </>
  )
}

export default Cart
