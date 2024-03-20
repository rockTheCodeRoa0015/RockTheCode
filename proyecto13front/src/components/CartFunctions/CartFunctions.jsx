import React from 'react'
import StyledCartFunctions from './CartFunctions.style'
import ButtonTotal from '../ButtonTotal/ButtonTotal'
import Paragraph from '../Paragraph/Paragraph'
import useAddCart from '../../customHooks/useAddCart'
import ButtonDelCart from '../ButtonDelCart/ButtonDelCart'

const CartFunctions = ({
  children,
  numBooks,
  idBook,
  personalId,
  display,
  dir,
  jc,
  ai,
  w,
  h,
  pos,
  left,
  top,
  index,
  gap,
  bg,
  wrap,
  br,
  padding,
  border,
  margin
}) => {
  const { num, sumNum, substractNum } = useAddCart(numBooks)

  return (
    <StyledCartFunctions
      display={display}
      dir={dir}
      jc={jc}
      ai={ai}
      w={w}
      h={h}
      pos={pos}
      left={left}
      top={top}
      index={index}
      gap={gap}
      bg={bg}
      wrap={wrap}
      br={br}
      padding={padding}
      border={border}
      margin={margin}
    >
      <ButtonTotal func={substractNum} action={'subs'} id={idBook} num={num}>
        -
      </ButtonTotal>
      <Paragraph>{num}</Paragraph>
      <ButtonTotal
        func={sumNum}
        action={'sum'}
        id={idBook}
        num={num}
        personalId={personalId}
      >
        +
      </ButtonTotal>
      <ButtonDelCart idBook={idBook} num={num}>
        🗑️
      </ButtonDelCart>
    </StyledCartFunctions>
  )
}

export default CartFunctions
