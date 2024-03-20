import { useContext } from 'react'
import { addRemoveCartBooks } from '../../api/cartApi'
import StyledButtonTotal from './ButtonTotal.style'
import { NumCartContext } from '../../provider/NumCartProvider'

const ButtonTotal = ({ children, func, action, id, num, personalId }) => {
  const { addCart, removeCart } = useContext(NumCartContext)

  const funcButton = async () => {
    if (action) {
      const res = await addRemoveCartBooks(action, id, num, personalId)
      if (res.mensaje) {
        func()
        action === 'sum' ? addCart(1) : removeCart(1)
      }
    } else {
      func()
    }
  }

  return <StyledButtonTotal onClick={funcButton}>{children}</StyledButtonTotal>
}

export default ButtonTotal
