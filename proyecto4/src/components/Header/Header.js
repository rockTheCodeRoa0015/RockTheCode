import './Header.css'
import { Ul } from '../Ul/Ul'

export const Header = (parentNode, data) => {
  const header = document.createElement('header')
  const divName = document.createElement('div')
  const divInfo = document.createElement('div')
  const divMenu = document.createElement('div')
  const h1 = document.createElement('h1')
  const img = document.createElement('img')
  const divInfoMenu = document.createElement('div')

  h1.textContent = data.name
  divName.appendChild(h1)
  img.src = './img/menu.png'
  img.addEventListener('click', () => {
    divInfoMenu.classList.toggle('infoMenu-show')
  })
  divMenu.appendChild(img)
  divMenu.appendChild(divInfoMenu)

  const arrayList = ['Sobre mi', 'Estudios', 'Experiencia', 'Proyectos']
  Ul(divInfo, arrayList, true, 'sub')
  Ul(divInfoMenu, arrayList, true, 'menuList')

  divName.classList.add('name')
  divInfo.classList.add('info')
  divMenu.classList.add('menu', 'flex-container')
  divInfoMenu.classList.add('infoMenu')
  header.classList.add('flex-container', 'header')
  header.appendChild(divName)
  header.appendChild(divInfo)
  header.append(divMenu)
  parentNode.appendChild(header)
}
