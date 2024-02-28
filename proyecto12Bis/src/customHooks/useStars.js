import { useState } from 'react'

const useStars = (num = 10) => {
  const [rate, setRate] = useState(null)
  const [hover, setHover] = useState(null)
  const [stars, setStars] = useState(num)

  return { stars, rate, hover, setRate, setHover }
}

export default useStars
