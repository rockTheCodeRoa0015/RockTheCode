import './InputSearch.css'
import { searchSkill } from '../Hero/Hero'

export const InputSearch = (parentNode, placeHolder, size) => {
  const input = document.createElement('input')
  const img = document.createElement('img')
  input.placeholder = placeHolder
  input.classList.add('inputSearch', size)
  input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      searchSkill(input.value)
    }
  })

  img.src = './img/lupa.png'
  img.classList.add('imgSearch')
  img.addEventListener('click', () => {
    searchSkill(input.value)
  })
  parentNode.appendChild(input)
  parentNode.appendChild(img)
}
