import { useContext } from 'react'
import StyledButton from './Button.style'
import { NumCartContext } from '../../provider/NumCartProvider'
import { functionButtons } from '../../utils/functionButtons'

const Button = ({ children, bg, disable, type, action }) => {
  const { addCart } = useContext(NumCartContext)

  return (
    <StyledButton
      bg={bg}
      onClick={() => functionButtons(action, addCart)}
      disabled={disable}
      type={type ? type : 'button'}
    >
      {children}
    </StyledButton>
  )
}

export default Button
