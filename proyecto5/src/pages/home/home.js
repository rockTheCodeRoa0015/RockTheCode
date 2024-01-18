import './home.css'
import { juegosHome } from '../../data/juegos'
import { chargeSection } from '../hero/hero'

export const home = (parentNode) => {
  const divHome = document.createElement('div')
  const h2 = document.createElement('h2')
  const divJuegos = document.createElement('div')

  h2.textContent = 'Home'
  for (const juego of juegosHome) {
    const article = document.createElement('article')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    img.src = juego.img
    img.addEventListener('click', () => {
      chargeSection(juego.nombre)
    })
    h3.textContent = juego.nombre
    p.textContent = juego.desc

    article.classList.add('flex-container')

    article.appendChild(img)
    article.appendChild(h3)
    article.appendChild(p)
    divJuegos.appendChild(article)
  }

  divJuegos.classList.add('flex-container', 'juegosHome')
  divHome.classList.add('flex-container', 'home')

  divHome.appendChild(h2)
  divHome.appendChild(divJuegos)
  parentNode.appendChild(divHome)
}
