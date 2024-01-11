import './InputSearch.css'
import { buscarImagen } from '../../../main/'

export const InputSearch = (parentNode, placeHolder, size) => {
  const input = document.createElement('input')
  const img = document.createElement('img')
  input.placeholder = placeHolder
  input.classList.add('inputSearch', size)
  input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      buscarImagen(input.value)
    }
  })

  img.src = './img/lupa.png'
  img.classList.add('imgSearch')
  img.addEventListener('click', () => {
    buscarImagen(input.value)
  })
  parentNode.appendChild(input)
  parentNode.appendChild(img)
}
