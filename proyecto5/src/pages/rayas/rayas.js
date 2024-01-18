import './rayas.css'
import { Button } from '../../componentes/Button/Button'

let playerActive = localStorage.getItem('playerActive') || ''
let isWin = localStorage.getItem('isWin') || false
let arraytablero = JSON.parse(localStorage.getItem('arraytablero')) || [
  ['cuad1', 'cuad2', 'cuad3'],
  ['cuad4', 'cuad5', 'cuad6'],
  ['cuad7', 'cuad8', 'cuad9']
]

export const rayas = (parentNode) => {
  const divRayas = document.createElement('div')
  const h2 = document.createElement('h2')
  const divJugadores = document.createElement('div')
  const divjuegoRayas = document.createElement('div')
  const pTurno = document.createElement('p')
  const divtablero = document.createElement('div')
  const pReset = document.createElement('p')

  h2.textContent = 'Tres en raya'
  pTurno.textContent = 'Turno de: '
  pTurno.id = 'playerTurn'
  pReset.textContent = 'Reiniciar partida'

  divRayas.classList.add('flex-container', 'rayas')
  divJugadores.classList.add('flex-container', 'jugadores')
  divjuegoRayas.classList.add('flex-container', 'juegorayas')
  divtablero.classList.add('flex-container', 'tablero')
  pReset.classList.add('resetRayas')
  pReset.addEventListener('click', () => {
    resetRayas()
  })

  Button(divJugadores, 'Harry Potter', 'player')
  Button(divJugadores, 'Voldemort', 'player')
  divjuegoRayas.appendChild(pTurno)
  divjuegoRayas.appendChild(divtablero)
  divjuegoRayas.appendChild(pReset)

  for (let i = 0; i < 9; i++) {
    const div = document.createElement('div')
    div.id = 'cuad' + (i + 1)
    div.classList.add('flex-container')
    divtablero.appendChild(div)
    div.addEventListener('click', (e) => {
      selectCuadricula(e.target.id)
    })
  }

  divRayas.appendChild(h2)
  divRayas.appendChild(divJugadores)
  divRayas.appendChild(divjuegoRayas)

  parentNode.appendChild(divRayas)
  if (
    localStorage.getItem('playerActive') !== null &&
    JSON.parse(localStorage.getItem('arraytablero')) !== null
  ) {
    pintarLocalStorage()
  }
}

const pintarLocalStorage = () => {
  const pturn = document.querySelector('#playerTurn')
  if (isWin) {
    pturn.textContent = 'Ganador:' + playerActive
  } else {
    pturn.textContent = 'Turno de: ' + playerActive
  }
  const div = document.querySelector('.jugadores')
  div.style.display = 'none'
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arraytablero[i][j] === 'H') {
        let num = ''
        if (
          (i === 0 && j === 0) ||
          (i === 0 && j === 1) ||
          (i === 0 && j === 2)
        ) {
          num = j + 1
        } else if (
          (i === 1 && j === 0) ||
          (i === 1 && j === 1) ||
          (i === 1 && j === 2)
        ) {
          num = j + 4
        } else {
          num = j + 7
        }
        chargeImgtablero('Harry Potter', 'cuad' + num)
      } else if (arraytablero[i][j] === 'V') {
        let num = ''
        if (
          (i === 0 && j === 0) ||
          (i === 0 && j === 1) ||
          (i === 0 && j === 2)
        ) {
          num = j + 1
        } else if (
          (i === 1 && j === 0) ||
          (i === 1 && j === 1) ||
          (i === 1 && j === 2)
        ) {
          num = j + 4
        } else {
          num = j + 7
        }
        chargeImgtablero('Voldemort', 'cuad' + num)
      }
    }
  }
}

export const selectPlayer = (player) => {
  const pturn = document.querySelector('#playerTurn')
  const div = document.querySelector('.jugadores')
  pturn.textContent = pturn.textContent + player
  div.style.display = 'none'
  playerActive = player
  localStorage.setItem('playerActive', playerActive)
}

const selectCuadricula = (posicion) => {
  if (isWin) {
    return
  } else if (playerActive === '') {
    alert('Elige un jugador')
  } else {
    if (comprobarCuadricula(posicion)) {
      const pturn = document.querySelector('#playerTurn')
      if (playerActive === 'Harry Potter') {
        chargeArrayTablero(playerActive, posicion)
        chargeImgtablero(playerActive, posicion)
        comprobarGanador(playerActive)
        if (!isWin) {
          playerActive = 'Voldemort'
          localStorage.setItem('playerActive', playerActive)
          pturn.textContent = 'Turno de: Voldemort'
        }
      } else {
        chargeArrayTablero(playerActive, posicion)
        chargeImgtablero(playerActive, posicion)
        comprobarGanador(playerActive)
        if (!isWin) {
          playerActive = 'Harry Potter'
          localStorage.setItem('playerActive', playerActive)
          pturn.textContent = 'Turno de: Harry Potter'
        }
      }
    }
  }
}

const comprobarCuadricula = (posicion) => {
  let isFree = false
  switch (posicion) {
    case 'cuad1':
      arraytablero[0][0] === 'H' || arraytablero[0][0] === 'V'
        ? (isFree = false)
        : (isFree = true)
      break
    case 'cuad2':
      arraytablero[0][1] === 'H' || arraytablero[0][1] === 'V'
        ? (isFree = false)
        : (isFree = true)
      break
    case 'cuad3':
      arraytablero[0][2] === 'H' || arraytablero[0][2] === 'V'
        ? (isFree = false)
        : (isFree = true)
      break
    case 'cuad4':
      arraytablero[1][0] === 'H' || arraytablero[1][0] === 'V'
        ? (isFree = false)
        : (isFree = true)
      break
    case 'cuad5':
      arraytablero[1][1] === 'H' || arraytablero[1][1] === 'V'
        ? (isFree = false)
        : (isFree = true)
      break
    case 'cuad6':
      arraytablero[1][2] === 'H' || arraytablero[1][2] === 'V'
        ? (isFree = false)
        : (isFree = true)
      break
    case 'cuad7':
      arraytablero[2][0] === 'H' || arraytablero[2][0] === 'V'
        ? (isFree = false)
        : (isFree = true)
      break
    case 'cuad8':
      arraytablero[2][1] === 'H' || arraytablero[2][1] === 'V'
        ? (isFree = false)
        : (isFree = true)
      break
    case 'cuad9':
      arraytablero[2][2] === 'H' || arraytablero[2][2] === 'V'
        ? (isFree = false)
        : (isFree = true)
      break
    default:
      break
  }
  return isFree
}

const chargeArrayTablero = (playerActive, posicion) => {
  switch (posicion) {
    case 'cuad1':
      playerActive === 'Harry Potter'
        ? (arraytablero[0][0] = 'H')
        : (arraytablero[0][0] = 'V')
      localStorage.setItem('arraytablero', JSON.stringify(arraytablero))
      break
    case 'cuad2':
      playerActive === 'Harry Potter'
        ? (arraytablero[0][1] = 'H')
        : (arraytablero[0][1] = 'V')
      localStorage.setItem('arraytablero', JSON.stringify(arraytablero))
      break
    case 'cuad3':
      playerActive === 'Harry Potter'
        ? (arraytablero[0][2] = 'H')
        : (arraytablero[0][2] = 'V')
      localStorage.setItem('arraytablero', JSON.stringify(arraytablero))
      break
    case 'cuad4':
      playerActive === 'Harry Potter'
        ? (arraytablero[1][0] = 'H')
        : (arraytablero[1][0] = 'V')
      localStorage.setItem('arraytablero', JSON.stringify(arraytablero))
      break
    case 'cuad5':
      playerActive === 'Harry Potter'
        ? (arraytablero[1][1] = 'H')
        : (arraytablero[1][1] = 'V')
      localStorage.setItem('arraytablero', JSON.stringify(arraytablero))
      break
    case 'cuad6':
      playerActive === 'Harry Potter'
        ? (arraytablero[1][2] = 'H')
        : (arraytablero[1][2] = 'V')
      localStorage.setItem('arraytablero', JSON.stringify(arraytablero))
      break
    case 'cuad7':
      playerActive === 'Harry Potter'
        ? (arraytablero[2][0] = 'H')
        : (arraytablero[2][0] = 'V')
      localStorage.setItem('arraytablero', JSON.stringify(arraytablero))
      break
    case 'cuad8':
      playerActive === 'Harry Potter'
        ? (arraytablero[2][1] = 'H')
        : (arraytablero[2][1] = 'V')
      localStorage.setItem('arraytablero', JSON.stringify(arraytablero))
      break
    case 'cuad9':
      playerActive === 'Harry Potter'
        ? (arraytablero[2][2] = 'H')
        : (arraytablero[2][2] = 'V')
      localStorage.setItem('arraytablero', JSON.stringify(arraytablero))
      break
    default:
      break
  }
}

const chargeImgtablero = (playerActive, posicion) => {
  const div = document.querySelector('#' + posicion)
  const img = document.createElement('img')
  playerActive === 'Harry Potter'
    ? (img.src = './img/rayas/harry.png')
    : (img.src = './img/rayas/voldemort.png')
  div.appendChild(img)
}
const comprobarGanador = (playerActive) => {
  const pturn = document.querySelector('#playerTurn')
  if (playerActive === 'Harry Potter') {
    if (
      arraytablero[0][0] === 'H' &&
      arraytablero[0][1] === 'H' &&
      arraytablero[0][2] === 'H'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad1', 'cuad2', 'cuad3')
    } else if (
      arraytablero[1][0] === 'H' &&
      arraytablero[1][1] === 'H' &&
      arraytablero[1][2] === 'H'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad4', 'cuad5', 'cuad6')
    } else if (
      arraytablero[2][0] === 'H' &&
      arraytablero[2][1] === 'H' &&
      arraytablero[2][2] === 'H'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad7', 'cuad8', 'cuad9')
    } else if (
      arraytablero[0][0] === 'H' &&
      arraytablero[1][0] === 'H' &&
      arraytablero[2][0] === 'H'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad1', 'cuad4', 'cuad7')
    } else if (
      arraytablero[0][1] === 'H' &&
      arraytablero[1][1] === 'H' &&
      arraytablero[2][1] === 'H'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad2', 'cuad5', 'cuad8')
    } else if (
      arraytablero[0][2] === 'H' &&
      arraytablero[1][2] === 'H' &&
      arraytablero[2][2] === 'H'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad3', 'cuad6', 'cuad9')
    } else if (
      arraytablero[0][0] === 'H' &&
      arraytablero[1][1] === 'H' &&
      arraytablero[2][2] === 'H'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad1', 'cuad5', 'cuad9')
    } else if (
      arraytablero[0][2] === 'H' &&
      arraytablero[1][1] === 'H' &&
      arraytablero[2][0] === 'H'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad3', 'cuad5', 'cuad7')
    }
  } else {
    if (
      arraytablero[0][0] === 'V' &&
      arraytablero[0][1] === 'V' &&
      arraytablero[0][2] === 'V'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad1', 'cuad2', 'cuad3')
    } else if (
      arraytablero[1][0] === 'V' &&
      arraytablero[1][1] === 'V' &&
      arraytablero[1][2] === 'V'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad4', 'cuad5', 'cuad6')
    } else if (
      arraytablero[2][0] === 'V' &&
      arraytablero[2][1] === 'V' &&
      arraytablero[2][2] === 'V'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad7', 'cuad8', 'cuad9')
    } else if (
      arraytablero[0][0] === 'V' &&
      arraytablero[1][0] === 'V' &&
      arraytablero[2][0] === 'V'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad1', 'cuad4', 'cuad7')
    } else if (
      arraytablero[0][1] === 'V' &&
      arraytablero[1][1] === 'V' &&
      arraytablero[2][1] === 'V'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad2', 'cuad5', 'cuad8')
    } else if (
      arraytablero[0][2] === 'V' &&
      arraytablero[1][2] === 'V' &&
      arraytablero[2][2] === 'V'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad3', 'cuad6', 'cuad9')
    } else if (
      arraytablero[0][0] === 'V' &&
      arraytablero[1][1] === 'V' &&
      arraytablero[2][2] === 'V'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad1', 'cuad5', 'cuad9')
    } else if (
      arraytablero[0][2] === 'V' &&
      arraytablero[1][1] === 'V' &&
      arraytablero[2][0] === 'V'
    ) {
      isWin = true
      localStorage.setItem('isWin', isWin)
      pturn.textContent = 'Ganador:' + playerActive
      animationWinner('cuad3', 'cuad5', 'cuad7')
    }
  }
}

const resetRayas = () => {
  playerActive = ''
  isWin = false
  arraytablero = [
    ['cuad1', 'cuad2', 'cuad3'],
    ['cuad4', 'cuad5', 'cuad6'],
    ['cuad7', 'cuad8', 'cuad9']
  ]
  localStorage.removeItem('playerActive')
  localStorage.removeItem('arraytablero')
  localStorage.removeItem('isWin')

  const main = document.querySelector('#main')
  const divRayas = document.querySelector('.rayas')
  main.removeChild(divRayas)
  rayas(main)
}

const animationWinner = (pos1, pos2, pos3) => {
  const div1 = document.querySelector('#' + pos1)
  const div2 = document.querySelector('#' + pos2)
  const div3 = document.querySelector('#' + pos3)
  div1.classList.toggle(pos1 + '-show')
  div2.classList.toggle(pos2 + '-show')
  div3.classList.toggle(pos3 + '-show')
  setTimeout(() => {
    div1.classList.toggle(pos1 + '-show')
    div2.classList.toggle(pos2 + '-show')
    div3.classList.toggle(pos3 + '-show')
  }, '3000')
}
