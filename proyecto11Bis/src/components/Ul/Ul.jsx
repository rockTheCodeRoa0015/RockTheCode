import Li from '../Li/Li'
import './Ul.css'

const Ul = () => {
  return (
    <ul className='ul flex-container'>
      <Li text='Home' route='/'></Li>
      <Li text='Animes' route='/animes'></Li>
      <Li text='Top Animes' route='/top'></Li>
    </ul>
  )
}

export default Ul
