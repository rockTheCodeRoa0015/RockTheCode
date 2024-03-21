import { useState } from 'react'

const useGetCategorie = () => {
  const [value, setValue] = useState('')

  return { value, setValue }
}

export default useGetCategorie
