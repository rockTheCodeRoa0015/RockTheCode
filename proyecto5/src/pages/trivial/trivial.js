import './trivial.css'
import {
  preguntasFacil,
  preguntasMedia,
  preguntasDificil
} from '../../data/trivialPreguntas'
import { Button } from '../../componentes/Button/Button'

let arrayResponse = JSON.parse(localStorage.getItem('arrayResponse')) || []
let correctAmswers = []

export const trivial = (parentNode) => {
  const divTrivial = document.createElement('div')
  const h2 = document.createElement('h2')
  const select = document.createElement('select')
  const opDefault = document.createElement('option')
  const opEasy = document.createElement('option')
  const opMedium = document.createElement('option')
  const opHard = document.createElement('option')

  h2.textContent = 'Trivial'
  h2.id = 'title'
  select.id = 'dificult'
  opDefault.textContent = 'Seleccione dificultad'
  opDefault.value = 'default'
  opEasy.textContent = 'Fácil'
  opEasy.value = 'easy'
  opMedium.textContent = 'Medio'
  opMedium.value = 'medium'
  opHard.textContent = 'Difícil'
  opHard.value = 'hard'

  select.addEventListener('change', (e) => {
    chargeQuestions(e.target.value)
  })

  divTrivial.classList.add('flex-container', 'trivial')

  select.appendChild(opDefault)
  select.appendChild(opEasy)
  select.appendChild(opMedium)
  select.appendChild(opHard)
  divTrivial.appendChild(h2)
  divTrivial.appendChild(select)
  Button(divTrivial, 'Reiniciar', 'resertTrivial')
  parentNode.appendChild(divTrivial)

  if (
    localStorage.getItem('dificultTrivial') !== null &&
    JSON.parse(localStorage.getItem('arrayResponse')) !== null
  ) {
    chargeQuestions(localStorage.getItem('dificultTrivial'))
    printLocalStorageRespone(JSON.parse(localStorage.getItem('arrayResponse')))
  }
}

const chargeQuestions = (dificultad) => {
  localStorage.setItem('dificultTrivial', dificultad)
  const h2 = document.querySelector('#title')
  switch (dificultad) {
    case 'easy':
      let arrResEasy = preguntasFacil.map((pregunta) => pregunta.respuestas)
      for (const res of arrResEasy) {
        let arrCorrect = res.filter((respuesta) => respuesta.istrue)
        correctAmswers.push(arrCorrect)
      }
      h2.textContent = h2.textContent + ' Fácil'
      printQuestions(preguntasFacil)
      break
    case 'medium':
      let arrResMeduim = preguntasMedia.map((pregunta) => pregunta.respuestas)
      for (const res of arrResMeduim) {
        let arrCorrect = res.filter((respuesta) => respuesta.istrue)
        correctAmswers.push(arrCorrect)
      }
      h2.textContent = h2.textContent + ' Medio'
      printQuestions(preguntasMedia)
      break
    case 'hard':
      let arrResHard = preguntasDificil.map((pregunta) => pregunta.respuestas)
      for (const res of arrResHard) {
        let arrCorrect = res.filter((respuesta) => respuesta.istrue)
        correctAmswers.push(arrCorrect)
      }
      h2.textContent = h2.textContent + ' Difícil'
      printQuestions(preguntasDificil)
      break
    default:
      break
  }
}

const printQuestions = (arrayQuestions) => {
  const select = document.querySelector('#dificult')
  const btn = document.querySelector('.resertTrivial')
  select.style.display = 'none'
  btn.style.display = 'inline'

  const divTrivial = document.querySelector('.trivial')
  const divQuiz = document.createElement('div')
  const divQuestions = document.createElement('div')
  const pResult = document.createElement('p')
  const divbtn = document.createElement('div')

  pResult.id = 'pResult'

  for (const question of arrayQuestions) {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    div.appendChild(h3)
    h3.textContent = question.pregunta
    for (const respuesta of question.respuestas) {
      const h4 = document.createElement('h4')
      h4.textContent = respuesta.res
      h4.classList.add('grupo' + question.id)
      h4.addEventListener('click', (e) => {
        pintarRespuesta(e.target.textContent, e.target.className, e.target)
      })
      div.appendChild(h4)
    }
    div.classList.add('flex-container', 'question')
    divQuestions.appendChild(div)
  }

  divQuiz.classList.add('flex-container', 'quiz')
  divQuestions.classList.add('flex-container', 'questions')

  Button(divbtn, 'Comprobar', 'comprobarTivial')
  divQuiz.appendChild(divQuestions)
  divQuiz.appendChild(pResult)
  divQuiz.appendChild(divbtn)
  divTrivial.appendChild(divQuiz)
}

const pintarRespuesta = (respuesta, clase, elemento) => {
  const h4 = document.querySelector('.' + clase + '.selected')
  if (h4 !== null) {
    h4.classList.remove('selected')
    const pos = arrayResponse.map((e) => e.id).indexOf(clase)
    arrayResponse[pos].res = respuesta
  } else {
    let obResponse = {
      id: clase,
      res: respuesta
    }
    arrayResponse.push(obResponse)
  }
  localStorage.setItem('arrayResponse', JSON.stringify(arrayResponse))
  elemento.classList.add('selected')
}

const printLocalStorageRespone = (arrayResponse) => {
  console.log(arrayResponse)
  for (const response of arrayResponse) {
    const arrayh4 = document.querySelectorAll('.' + response.id)
    for (const h4 of arrayh4) {
      if (h4.textContent === response.res) {
        h4.classList.add('selected')
      }
    }
  }
}

export const comprobarQuiz = () => {
  let sum = 0

  for (const response of arrayResponse) {
    let index = response.id.substring(5)
    if (correctAmswers[parseInt(index) - 1][0].res === response.res) {
      sum++
    }
  }
  const pResult = document.querySelector('#pResult')

  pResult.textContent = 'Has acertado un total de: ' + sum
}

export const resetTrivial = () => {
  const select = document.querySelector('#dificult')
  const btn = document.querySelector('.resertTrivial')
  const h2 = document.querySelector('#title')
  select.style.display = 'inline'
  btn.style.display = 'none'
  h2.textContent = 'Trivial'

  select.value = 'default'

  arrayResponse = []
  localStorage.removeItem('arrayResponse')
  localStorage.removeItem('dificultTrivial')
  correctAmswers = []

  const arrayh4 = document.querySelectorAll('.selected')
  for (const h4 of arrayh4) {
    h4.classList.remove('selected')
  }

  const div = document.querySelector('.quiz')
  while (div.firstChild) {
    div.removeChild(div.firstChild)
  }
  const divParent = document.querySelector('.trivial')
  divParent.removeChild(div)
}
