import { useContext } from 'react'
import StyledButton from './Button.style'
import { NumCartContext } from '../../provider/NumCartProvider'

const Button = ({ children, bg, disable, type, action }) => {
  const { addCart } = useContext(NumCartContext)

  const btnFunc = () => {
    if (action === 'add') {
      addCart()
    }
  }

  return (
    <StyledButton
      bg={bg}
      onClick={btnFunc}
      disabled={disable}
      type={type ? type : 'button'}
    >
      {children}
    </StyledButton>
  )
}

export default Button
