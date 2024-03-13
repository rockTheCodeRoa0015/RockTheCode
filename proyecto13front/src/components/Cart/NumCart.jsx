import { useContext } from 'react'
import StyledNumCart from './NumCart.style'
import { NumCartContext } from '../../provider/NumCartProvider'

const NumCart = () => {
  const { numCart } = useContext(NumCartContext)
  return <StyledNumCart>{numCart}</StyledNumCart>
}

export default NumCart
