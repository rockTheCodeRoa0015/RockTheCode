import { useParams } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  const { id } = useParams()

  return <div className='contact'>Contact {id}</div>
}

export default Contact
