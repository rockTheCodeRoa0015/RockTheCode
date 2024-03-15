import { createContext, useState } from 'react'

export const NumCartContext = createContext()

const NumCartProvider = ({ children }) => {
  const [numCart, setNumCart] = useState(0)

  const addCart = (num) => {
    setNumCart(numCart + num)
  }

  const removeCart = () => {
    setNumCart(numCart - 1)
  }
  return (
    <NumCartContext.Provider
      value={{ numCart, addCart, removeCart, setNumCart }}
    >
      {children}
    </NumCartContext.Provider>
  )
}

export default NumCartProvider
