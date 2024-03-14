import { useState } from 'react'

const useCustomError = () => {
  const [error, setError] = useState()
  return { error, setError }
}

export default useCustomError
