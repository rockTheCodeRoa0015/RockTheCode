import { useState } from 'react'

const useCustomMsg = () => {
  const [msg, setMsg] = useState()
  const [error, setError] = useState()
  return { msg, setMsg, error, setError }
}

export default useCustomMsg
