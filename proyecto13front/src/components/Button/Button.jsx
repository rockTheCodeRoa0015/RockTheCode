import { pushCart } from '../../utils/setCartItems'
import StyledButton from './Button.style'

const Button = ({ children, bg, numCart, setNumCart, disable }) => {
  const addCart = () => {
    if (numCart !== undefined) {
      pushCart(numCart, setNumCart)
    }
  }

  return (
    <StyledButton
      bg={bg}
      onClick={addCart}
      disabled={disable === 0 ? true : false}
    >
      {children}
    </StyledButton>
  )
}

export default Button
