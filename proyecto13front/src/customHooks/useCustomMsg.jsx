import { useState } from 'react'

const useCustomMsg = () => {
  const [msg, setMsg] = useState()
  return { msg, setMsg }
}

export default useCustomMsg
