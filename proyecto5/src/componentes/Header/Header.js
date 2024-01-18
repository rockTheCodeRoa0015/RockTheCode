import './Header.css'
import { juegos } from '../../data/juegos'
import { Ul } from '../Ul/Ul'

export const Header = (parentNode) => {
  const header = document.createElement('header')
  const divLogo = document.createElement('div')
  const divNav = document.createElement('div')
  const divMenu = document.createElement('div')
  const h1 = document.createElement('h1')
  const img = document.createElement('img')

  h1.textContent = 'Juegos de Hogwarts'
  img.src = './img/menu2.png'
  img.addEventListener('click', () => {
    divNav.classList.toggle('nav-show')
  })

  header.classList.add('flex-container', 'header')
  divLogo.classList.add('flex-container', 'logo')
  divNav.classList.add('flex-container', 'nav')
  divMenu.classList.add('flex-container', 'menu')

  divLogo.appendChild(h1)
  Ul(divNav, juegos, 'paginas', 'listNav')
  divMenu.appendChild(img)
  header.appendChild(divLogo)
  header.appendChild(divNav)
  header.appendChild(divMenu)
  parentNode.appendChild(header)
}
