import { createContext, useState } from 'react'

export const ToggleMenuContext = createContext()
const ToggleMenuProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <ToggleMenuContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleMenuContext.Provider>
  )
}

export default ToggleMenuProvider
