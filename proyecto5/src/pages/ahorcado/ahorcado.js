import './ahorcado.css'
import {
  imgAhoracado,
  letrasAhoracado,
  palabrasAhorcado
} from '../../data/PalabrasAhorcado'
import { Button, ButtonArray } from '../../componentes/Button/Button'

let palabraEncontrar = localStorage.getItem('palabraEncontrar') || ''
let palabraSize = localStorage.getItem('palabraSize') || ''
let rayoDel = localStorage.getItem('rayoDel') || 1
let arrayButton = JSON.parse(localStorage.getItem('arrayButton')) || []

export const ahorcado = (parentNode) => {
  const divAhorcado = document.createElement('div')
  const h2 = document.createElement('h2')
  const divBtn = document.createElement('div')
  const divjuego = document.createElement('div')
  const divVidas = document.createElement('div')
  const divTablero = document.createElement('div')
  const divImg = document.createElement('div')
  const divResultado = document.createElement('div')
  const pResultado = document.createElement('p')
  const divPalabra = document.createElement('div')
  const divPalabrasUsadas = document.createElement('div')
  const pTexto = document.createElement('p')
  const pletraUsada = document.createElement('p')
  const divBuscar = document.createElement('div')

  h2.textContent = 'Ahoracado'
  pTexto.textContent = 'Letras Usadas'

  divAhorcado.classList.add('flex-container', 'ahorcado')
  divBtn.classList.add('flex-container', 'divBtnAhorcado')
  divjuego.classList.add('flex-container', 'juegoAhorcado')
  divVidas.classList.add('flex-container', 'vidasAhorcado')
  divTablero.classList.add('flex-container', 'tableroAhorcado')
  divImg.classList.add('flex-container', 'imgAhorcado')
  divResultado.classList.add('resultAhorcado')
  divPalabra.classList.add('flex-container', 'palabraAhorcado')
  divPalabrasUsadas.classList.add('flex-container', 'palabraUsadaAhorcado')
  divBuscar.classList.add('flex-container', 'seacrhAhoracado')
  pletraUsada.classList.add('letrasUsadas')
  pResultado.classList.add('resultado')

  for (let i = 0; i < 6; i++) {
    const img = document.createElement('img')
    img.src = './img/ahorcado/rayo.png'
    img.classList.add('rayo' + (i + 1))
    divVidas.appendChild(img)
  }

  for (const imgagen of imgAhoracado) {
    const img = document.createElement('img')
    img.src = imgagen.url
    img.classList.add(imgagen.clase)
    divImg.appendChild(img)
  }

  divAhorcado.appendChild(h2)
  Button(divBtn, 'Iniciar partida', 'btnAhoracadoStart')
  Button(divBtn, 'Reiniciar partida', 'btnAhoracadoReset')
  divAhorcado.appendChild(divBtn)
  divjuego.appendChild(divVidas)
  divTablero.appendChild(divImg)
  divResultado.appendChild(pResultado)
  divTablero.appendChild(divResultado)
  divTablero.appendChild(divPalabra)
  divPalabrasUsadas.appendChild(pTexto)
  divPalabrasUsadas.appendChild(pletraUsada)
  ButtonArray(divBuscar, letrasAhoracado, 'btnLetra')
  divPalabrasUsadas.appendChild(divBuscar)
  divjuego.appendChild(divTablero)
  divjuego.appendChild(divPalabrasUsadas)
  divAhorcado.appendChild(divjuego)

  parentNode.appendChild(divAhorcado)

  if (
    localStorage.getItem('palabraEncontrar') !== null &&
    JSON.parse(localStorage.getItem('arrayButton')) !== null
  ) {
    pintarLocalStorage()
  }
}

const pintarLocalStorage = () => {
  const btnIni = document.querySelector('.btnAhoracadoStart')
  const btnReset = document.querySelector('.btnAhoracadoReset')
  btnIni.style.display = 'none'
  btnReset.style.display = 'inline'
  const divVidas = document.querySelector('.vidasAhorcado')
  const divpalabras = document.querySelector('.palabraUsadaAhorcado')
  const divPalabra = document.querySelector('.palabraAhorcado')
  divVidas.style.display = 'flex'
  divpalabras.style.display = 'flex'
  divPalabra.style.display = 'flex'
  for (let c of palabraEncontrar) {
    const p = document.createElement('p')
    if (c !== ' ') {
      p.textContent = '_'
      p.classList.add('letra' + c)
    } else {
      p.textContent = ' '
    }
    divPalabra.appendChild(p)
  }

  for (const button of arrayButton) {
    const btn = document.querySelector(button)
    btn.style.cursor = 'not-allowed'
    btn.disabled = true
    let text = button.substring(button.length - 1)
    const p = document.querySelector('.letrasUsadas')
    p.textContent = p.textContent + text + ' '
    const pLetra = document.querySelectorAll('.letra' + text)
    for (const letra of pLetra) {
      letra.textContent = text
    }
  }

  for (let i = 1; i < parseInt(localStorage.getItem('rayoDel')); i++) {
    const imgrayo = document.querySelector('.rayo' + i)
    imgrayo.style.opacity = '0'
  }
}

export const startAhorcado = () => {
  const btnIni = document.querySelector('.btnAhoracadoStart')
  const btnReset = document.querySelector('.btnAhoracadoReset')
  btnIni.style.display = 'none'
  btnReset.style.display = 'inline'
  const divVidas = document.querySelector('.vidasAhorcado')
  const divpalabras = document.querySelector('.palabraUsadaAhorcado')
  const divPalabra = document.querySelector('.palabraAhorcado')
  divVidas.style.display = 'flex'
  divpalabras.style.display = 'flex'
  divPalabra.style.display = 'flex'
  palabraEncontrar =
    palabrasAhorcado[Math.floor(Math.random() * palabrasAhorcado.length)]
  localStorage.setItem('palabraEncontrar', palabraEncontrar)
  let palabraTrim = palabraEncontrar.replace(/ /g, '')
  palabraSize = palabraTrim.length
  localStorage.setItem('palabraSize', palabraSize)
  //console.log(palabraEncontrar)

  for (let c of palabraEncontrar) {
    const p = document.createElement('p')
    if (c !== ' ') {
      p.textContent = '_'
      p.classList.add('letra' + c)
    } else {
      p.textContent = ' '
    }
    divPalabra.appendChild(p)
  }
}

export const resetAhorcado = () => {
  const btnIni = document.querySelector('.btnAhoracadoStart')
  const btnReset = document.querySelector('.btnAhoracadoReset')
  btnIni.style.display = 'inline'
  btnReset.style.display = 'none'
  const imgVoldemort = document.querySelector('.voldemort')
  const imgPatronus = document.querySelector('.patronus')
  imgVoldemort.style.display = 'none'
  imgPatronus.style.display = 'none'
  const imgrayo1 = document.querySelector('.rayo1')
  const imgrayo2 = document.querySelector('.rayo2')
  const imgrayo3 = document.querySelector('.rayo3')
  const imgrayo4 = document.querySelector('.rayo4')
  const imgrayo5 = document.querySelector('.rayo5')
  const imgrayo6 = document.querySelector('.rayo6')
  imgrayo1.style.opacity = '1'
  imgrayo2.style.opacity = '1'
  imgrayo3.style.opacity = '1'
  imgrayo4.style.opacity = '1'
  imgrayo5.style.opacity = '1'
  imgrayo6.style.opacity = '1'
  const divVidas = document.querySelector('.vidasAhorcado')
  const divpalabras = document.querySelector('.palabraUsadaAhorcado')
  const divPalabra = document.querySelector('.palabraAhorcado')
  const p = document.querySelector('.resultado')
  const pUsada = document.querySelector('.letrasUsadas')
  divVidas.style.display = 'none'
  divpalabras.style.display = 'none'
  divPalabra.style.display = 'none'
  p.textContent = ' '
  pUsada.textContent = ''
  palabraEncontrar = ''
  palabraSize = ''
  rayoDel = 1
  while (divPalabra.firstChild) {
    divPalabra.removeChild(divPalabra.firstChild)
  }

  for (const buton of arrayButton) {
    const btn = document.querySelector(buton)
    btn.style.cursor = 'pointer'
    btn.disabled = false
  }
  arrayButton = []
  localStorage.removeItem('palabraEncontrar')
  localStorage.removeItem('palabraSize')
  localStorage.removeItem('rayoDel')
  localStorage.removeItem('arrayButton')
}

export const searchPalabra = (text, clase) => {
  arrayButton.push('.' + clase)
  localStorage.setItem('arrayButton', JSON.stringify(arrayButton))
  if (rayoDel <= 6) {
    const btn = document.querySelector('.' + clase)
    btn.style.cursor = 'not-allowed'
    btn.disabled = true
    const p = document.querySelector('.letrasUsadas')
    p.textContent = p.textContent + text + ' '

    if (palabraEncontrar.includes(text)) {
      const pLetra = document.querySelectorAll('.letra' + text)
      for (const letra of pLetra) {
        letra.textContent = text
        palabraSize--
        localStorage.setItem('palabraSize', palabraSize)
      }
      comprobarPalabra()
    } else {
      if (rayoDel < 6) {
        const img = document.querySelector('.dementor')
        img.style.display = 'inline'
        setTimeout(() => {
          img.style.display = 'none'
        }, 1000)
      }
      const imgrayo = document.querySelector('.rayo' + rayoDel)
      imgrayo.style.opacity = '0'
      rayoDel++
      localStorage.setItem('rayoDel', rayoDel)
      comprobarPalabra()
    }
  }
}

const comprobarPalabra = () => {
  if (rayoDel > 6) {
    const div = document.querySelector('.resultAhorcado')
    const p = document.querySelector('.resultado')
    p.textContent = 'Has muerto, la palabra era:' + palabraEncontrar
    const img = document.querySelector('.voldemort')
    img.style.display = 'inline'
  } else if (palabraSize === 0) {
    const div = document.querySelector('.resultAhorcado')
    const p = document.querySelector('.resultado')
    p.textContent = 'Has ganado'
    const img = document.querySelector('.patronus')
    img.style.display = 'inline'
  }
}
