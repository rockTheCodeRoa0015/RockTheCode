import { createContext, useState } from 'react'

export const DelItemContext = createContext()

const DelItemProvider = ({ children }) => {
  const [delItem, setdelItem] = useState(false)
  return (
    <DelItemContext.Provider value={{ delItem, setdelItem }}>
      {children}
    </DelItemContext.Provider>
  )
}

export default DelItemProvider
