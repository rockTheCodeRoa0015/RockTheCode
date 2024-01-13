import './Header.css'
import { Ul } from '../Ul/Ul'

export const Header = (parentNode, data) => {
  const header = document.createElement('header')
  const divName = document.createElement('div')
  const divInfo = document.createElement('div')
  const h1 = document.createElement('h1')

  h1.textContent = data.name
  divName.appendChild(h1)

  const arrayList = ['Sobre mi', 'Estudios', 'Experiencia', 'Proyectos']
  Ul(divInfo, arrayList, true, 'sub')

  divName.classList.add('name')
  divInfo.classList.add('info')
  header.classList.add('flex-container', 'header')
  header.appendChild(divName)
  header.appendChild(divInfo)
  parentNode.appendChild(header)
}
