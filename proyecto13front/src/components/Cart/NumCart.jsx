import { useContext, useEffect } from 'react'
import StyledNumCart from './NumCart.style'
import { NumCartContext } from '../../provider/NumCartProvider'
import { getCartByPersonalId } from '../../api/cartApi'

const NumCart = () => {
  const { numCart, setNumCart } = useContext(NumCartContext)

  useEffect(() => {
    if (localStorage.getItem('id')) {
      setCartNum()
    }
  }, [])

  const setCartNum = async () => {
    const num = await getCartByPersonalId(localStorage.getItem('id'))
    if (num !== 0) {
      setNumCart(num)
    }
  }
  return <StyledNumCart>{numCart}</StyledNumCart>
}

export default NumCart
