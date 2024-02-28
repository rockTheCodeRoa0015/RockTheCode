import { useEffect, useState } from 'react'
import './Notification.css'

const Notification = ({ msg }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }, [])

  return (
    <>
      {show && (
        <div className='notification'>
          <p>{msg}</p>
        </div>
      )}
    </>
  )
}

export default Notification
