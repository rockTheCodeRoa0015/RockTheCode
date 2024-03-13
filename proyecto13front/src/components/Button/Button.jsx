import { useContext } from 'react'
import StyledButton from './Button.style'
import { NumCartContext } from '../../provider/NumCartProvider'

const Button = ({ children, bg, disable, type }) => {
  const { addCart } = useContext(NumCartContext)

  const btnFunc = () => {
    if (disable) {
      addCart()
    }
  }

  return (
    <StyledButton
      bg={bg}
      onClick={btnFunc}
      disabled={disable === 0 ? true : false}
      type={type ? type : 'button'}
    >
      {children}
    </StyledButton>
  )
}

export default Button
