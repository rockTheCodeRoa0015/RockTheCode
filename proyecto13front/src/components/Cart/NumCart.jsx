import { useContext } from 'react'
import StyledNumCart from './NumCart.style'
import { numCartContext } from '../../App'

const NumCart = () => {
  const num = useContext(numCartContext)
  return <StyledNumCart>{num}</StyledNumCart>
}

export default NumCart
