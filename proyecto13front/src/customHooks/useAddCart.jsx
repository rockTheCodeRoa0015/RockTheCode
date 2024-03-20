import { useState } from 'react'

const useAddCart = (initNum) => {
  const [num, setNum] = useState(initNum)

  const sumNum = () => {
    setNum(num + 1)
  }

  const substractNum = () => {
    if (num > 1) setNum(num - 1)
  }
  return { num, sumNum, substractNum }
}

export default useAddCart
