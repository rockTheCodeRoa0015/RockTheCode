import { createContext, useState } from 'react'

export const NumCartContext = createContext()

const NumCartProvider = ({ children }) => {
  const [numCart, setNumCart] = useState(0)

  const addCart = () => {
    setNumCart(numCart + 1)
  }

  const removeCart = () => {
    setNumCart(numCart - 1)
  }
  return (
    <NumCartContext.Provider value={{ numCart, addCart, removeCart }}>
      {children}
    </NumCartContext.Provider>
  )
}

export default NumCartProvider
