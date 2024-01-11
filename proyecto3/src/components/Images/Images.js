import './Images.css'
import { Button } from '../Buttons/Button'

export const Images = (parentNode, imagenes, search) => {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild)
  }
  for (const imagen of imagenes) {
    let url = ''
    const div = document.createElement('div')
    const img = document.createElement('img')
    if (!search) {
      url = imagen.urls.small
    } else {
      url = imagen.cover_photo.urls.regular
    }
    img.src = url
    img.addEventListener('click', (e) => {
      fullImage(e.target.src)
    })
    div.classList.add('images', 'flex-container')
    div.appendChild(img)
    Button(div, 'Guardar', 'S', url)
    parentNode.appendChild(div)
  }
}

const fullImage = (src) => {
  const parent = document.querySelector('.fullImageBox')
  const x = document.createElement('span')
  x.textContent = 'x'
  x.id = 'closeImage'
  parent.style.display = 'flex'
  const img = document.createElement('img')
  img.src = src
  parent.appendChild(x)
  parent.appendChild(img)
  x.addEventListener('click', () => {
    closeImage(img)
  })
}

const closeImage = (img) => {
  const parent = document.querySelector('.fullImageBox')
  parent.removeChild(img)
  parent.style.display = 'none'
}
