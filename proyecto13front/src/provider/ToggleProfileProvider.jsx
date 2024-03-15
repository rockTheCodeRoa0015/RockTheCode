import { createContext, useState } from 'react'

export const ToggleProfileContext = createContext()

const ToggleProfileProvider = ({ children }) => {
  const [toggleprofile, setToggleProfile] = useState(false)
  return (
    <ToggleProfileContext.Provider value={{ toggleprofile, setToggleProfile }}>
      {children}
    </ToggleProfileContext.Provider>
  )
}

export default ToggleProfileProvider
