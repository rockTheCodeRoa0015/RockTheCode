import { dataHome } from '../../data/data'
import './Home.css'

export const Home = (parentNode) => {
  const section = document.createElement('section')
  const img = document.createElement('img')
  const h2 = document.createElement('h2')

  img.src = dataHome.img
  h2.textContent = dataHome.desc

  section.classList.add('flex-container', 'home')

  section.appendChild(img)
  section.appendChild(h2)
  parentNode.appendChild(section)
}
