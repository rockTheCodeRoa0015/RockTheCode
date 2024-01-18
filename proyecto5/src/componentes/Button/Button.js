import './Button.css'
import { selectPlayer } from '../../pages/rayas/rayas'
import {
  startAhorcado,
  resetAhorcado,
  searchPalabra
} from '../../pages/ahorcado/ahorcado'
import { comprobarQuiz, resetTrivial } from '../../pages/trivial/trivial'

export const Button = (parentNode, text, clase) => {
  const btn = document.createElement('button')
  btn.textContent = text
  btn.classList.add(clase)
  btn.addEventListener('click', (e) => {
    if (clase === 'player') {
      selectPlayer(e.target.textContent)
    } else if (clase === 'btnAhoracadoStart') {
      startAhorcado()
    } else if (clase === 'btnAhoracadoReset') {
      resetAhorcado()
    } else if (clase === 'comprobarTivial') {
      comprobarQuiz()
    } else if (clase === 'resertTrivial') {
      resetTrivial()
    }
  })

  parentNode.appendChild(btn)
}

export const ButtonArray = (parentNode, arraytext, clase) => {
  for (const text of arraytext) {
    const btn = document.createElement('button')
    btn.textContent = text
    btn.classList.add(clase + text)
    btn.addEventListener('click', (e) => {
      searchPalabra(text, clase + text)
    })

    parentNode.appendChild(btn)
  }
}
