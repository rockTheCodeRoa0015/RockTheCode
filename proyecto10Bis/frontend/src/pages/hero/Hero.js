import { chargeSection } from '../../utils/router'
import { Book } from '../book/Book'
import { Home } from '../home/Home'
import { verifyBanned } from '../login/Login'
import './Hero.css'

export const Hero = (parentNode) => {
  const main = document.createElement('main')
  main.id = 'main'
  main.classList.add('flex-container')
  parentNode.appendChild(main)
  if (localStorage.getItem('user')) {
    verifyBanned()
    if (localStorage.getItem('isbanned') === 'false') {
      Book(main, 'All')
    } else {
      chargeSection('Logout')
    }
  } else {
    Home(main)
  }
}
