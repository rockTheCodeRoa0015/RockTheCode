import Li from '../Li/Li'
import './Ul.css'

const Ul = () => {
  const name = 'Jesús'
  return (
    <ul className='ul'>
      <Li text='Home' route='/'></Li>
      <Li text='About' route='/about'></Li>
      <Li text='Contact' route={`/contact/${name}`}></Li>
    </ul>
  )
}

export default Ul
