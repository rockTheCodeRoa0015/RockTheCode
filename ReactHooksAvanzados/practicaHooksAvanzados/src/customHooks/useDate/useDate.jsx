import { useEffect, useState } from 'react'

const useDate = () => {
  const [fecha, setFecha] = useState()

  const handleFecha = () => {
    setFecha(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleFecha()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return { fecha }
}

export default useDate
