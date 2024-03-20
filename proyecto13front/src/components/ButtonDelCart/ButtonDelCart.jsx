import React, { useContext } from 'react'
import StyledButtonDelCart from './ButtonDelCart.style'
import { delCart } from '../../api/cartApi'
import { DelItemContext } from '../../provider/DelItemProvider'
import { NumCartContext } from '../../provider/NumCartProvider'

const ButtonDelCart = ({ children, idBook, num }) => {
  const { delItem, setdelItem } = useContext(DelItemContext)
  const { removeCart } = useContext(NumCartContext)
  const funcDelItem = async () => {
    const res = await delCart(idBook)
    if (res.mensaje) {
      setdelItem(!delItem)
      removeCart(num)
    }
  }

  return (
    <StyledButtonDelCart onClick={funcDelItem}>{children}</StyledButtonDelCart>
  )
}

export default ButtonDelCart
