import './hero.css'
import { rayas } from '../rayas/rayas'
import { home } from '../home/home'
import { ahorcado } from '../ahorcado/ahorcado'
import { trivial } from '../trivial/trivial'

export const hero = (parentNode) => {
  const main = document.createElement('main')
  main.id = 'main'
  parentNode.appendChild(main)
  home(main)
}

export const chargeSection = (page) => {
  const main = document.querySelector('#main')
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
  switch (page) {
    case 'home':
      home(main)
      break
    case 'Tres en raya':
      rayas(main)
      break
    case 'Ahorcado':
      ahorcado(main)
      break
    case 'Trivial':
      trivial(main)
      break
    default:
      home(main)
      break
  }
}
