import { useContext } from 'react'
import { NumCartContext } from '../../provider/NumCartProvider'
import StyledButtonCart from './ButtonCart.style'
import { addBooksCart } from '../../api/cartApi'

const ButtonCart = ({ children, Book, num, disable, setError }) => {
  const { addCart } = useContext(NumCartContext)
  const addBookCart = async () => {
    const res = await addBooksCart(Book, num)
    if (res.mensaje) {
      addCart(num)
    } else {
      setError(res.error)
    }
  }

  return (
    <StyledButtonCart onClick={addBookCart} disabled={disable}>
      {children}
    </StyledButtonCart>
  )
}

export default ButtonCart
