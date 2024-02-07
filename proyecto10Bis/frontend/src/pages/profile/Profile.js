import { chargeSection } from '../hero/Hero'
import './Profile.css'

let arrOpinonProfile = []
const NUMOPINONPROFILEPERPAGE = 5
let NUMPAGESPROFILE = 0
let pageProfile = 1

export const Profile = (parentNode, userId) => {
  const sectionProfile = document.createElement('section')
  const sectionFav = document.createElement('section')
  const sectionOpinion = document.createElement('section')
  const h2Fav = document.createElement('h2')
  const divArticle = document.createElement('div')
  const h2Opinion = document.createElement('h2')

  sectionProfile.classList.add('flex-container', 'profileInfo')
  sectionFav.classList.add('flex-container', 'profileFav')
  sectionOpinion.classList.add('flex-container', 'profileOpinion')
  divArticle.classList.add('flex-container', 'divArticleFav')

  h2Fav.textContent = 'Mis libros Favoritos'
  h2Opinion.textContent = 'Mis Opiniones'

  sectionFav.appendChild(h2Fav)
  sectionFav.appendChild(divArticle)
  sectionOpinion.appendChild(h2Opinion)

  fetch('http://localhost:3000/api/v1/users/' + userId, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
    .then((res) => res.json())
    .then((profile) => {
      const imgProfile = document.createElement('img')
      const h3Username = document.createElement('h3')

      imgProfile.src = profile.avatar
      h3Username.textContent = profile.userName

      sectionProfile.appendChild(imgProfile)
      sectionProfile.appendChild(h3Username)

      for (const book of profile.favouritesBooks) {
        const article = document.createElement('article')
        const imgBook = document.createElement('img')
        const pTitle = document.createElement('p')

        imgBook.src = book.cover
        pTitle.textContent = book.title
        article.id = book._id

        article.classList.add('flex-container', 'profileFavbook')
        article.appendChild(imgBook)
        article.appendChild(pTitle)
        article.addEventListener('click', () => {
          chargeSection('DetalleLibro', book._id)
        })
        divArticle.appendChild(article)
      }
    })

  fetch('http://localhost:3000/api/v1/opinions/getByUser/' + userId, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
    .then((res) => res.json())
    .then((opinions) => {
      printOpinons(opinions, sectionOpinion)
    })

  /****** */
  const divBtn = document.createElement('div')
  const btnBefore = document.createElement('button')
  const btnAfter = document.createElement('button')
  divBtn.classList.add('flex-container')
  btnBefore.textContent = '<<'
  btnBefore.id = 'beforeProfile'
  btnBefore.disabled = true
  btnBefore.addEventListener('click', () => {
    printBefore(sectionOpinion)
  })
  btnAfter.textContent = '>>'
  btnAfter.id = 'afterProfile'
  btnAfter.disabled = true
  btnAfter.addEventListener('click', () => {
    printAfter(sectionOpinion)
  })
  divBtn.appendChild(btnBefore)
  divBtn.appendChild(btnAfter)

  /********** */

  parentNode.appendChild(sectionProfile)
  parentNode.appendChild(sectionFav)
  parentNode.appendChild(sectionOpinion)
  parentNode.appendChild(divBtn)
}

const printOpinons = (opinions, sectionOpinion) => {
  arrOpinonProfile = []
  pageProfile = 1
  const btnAfter = document.querySelector('#afterProfile')
  btnAfter.disabled = true
  const btnBefore = document.querySelector('#beforeProfile')
  btnBefore.disabled = true
  for (const opinion of opinions) {
    arrOpinonProfile.push(opinion)
  }

  NUMPAGESPROFILE = Math.ceil(arrOpinonProfile.length / NUMOPINONPROFILEPERPAGE)

  let bucle =
    opinions.length > NUMOPINONPROFILEPERPAGE
      ? NUMOPINONPROFILEPERPAGE
      : opinions.length

  for (let i = 0; i < bucle; i++) {
    const divOpinionUser = document.createElement('div')
    const divInfoUser = document.createElement('div')
    const divBook = document.createElement('div')
    const pTitle = document.createElement('p')
    const divRate = document.createElement('div')
    const pRate = document.createElement('p')
    const divStar = document.createElement('div')
    const divOpinion = document.createElement('div')
    const pOpinion = document.createElement('p')

    divOpinionUser.classList.add('flex-container', 'profileOpinionBook')
    divInfoUser.classList.add('flex-container', 'profileTitleBook')
    divStar.classList.add('estrella', 'rellena')
    divRate.classList.add('flex-container', 'profileRateBook')
    divBook.classList.add('flex-container', 'profileBookDetails')
    divOpinion.classList.add('flex-container', 'profileOpinionText')

    pTitle.textContent = arrOpinonProfile[i].books[0].title
    pTitle.addEventListener('click', () => {
      chargeSection('DetalleLibro', arrOpinonProfile[i].books[0]._id)
    })
    pRate.textContent = arrOpinonProfile[i].rating
    pOpinion.textContent = arrOpinonProfile[i].opinion

    divBook.appendChild(pTitle)
    divRate.appendChild(pRate)
    divRate.appendChild(divStar)
    divInfoUser.appendChild(divBook)
    divInfoUser.appendChild(divRate)
    divOpinion.appendChild(pOpinion)
    divOpinionUser.appendChild(divInfoUser)
    divOpinionUser.appendChild(divOpinion)
    sectionOpinion.appendChild(divOpinionUser)
  }

  if (arrOpinonProfile.length > NUMOPINONPROFILEPERPAGE) {
    btnAfter.disabled = false
  }
}

const printAfter = (sectionOpinion) => {
  const divOpinions = document.querySelector('.profileOpinion')
  const allOpinions = document.querySelectorAll('.profileOpinionBook')
  for (const opinion of allOpinions) {
    divOpinions.removeChild(opinion)
  }

  let bucle =
    arrOpinonProfile.length > NUMOPINONPROFILEPERPAGE * (pageProfile + 1)
      ? NUMOPINONPROFILEPERPAGE * (pageProfile + 1)
      : arrOpinonProfile.length

  for (let i = pageProfile * NUMOPINONPROFILEPERPAGE; i < bucle; i++) {
    const divOpinionUser = document.createElement('div')
    const divInfoUser = document.createElement('div')
    const divBook = document.createElement('div')
    const pTitle = document.createElement('p')
    const divRate = document.createElement('div')
    const pRate = document.createElement('p')
    const divStar = document.createElement('div')
    const divOpinion = document.createElement('div')
    const pOpinion = document.createElement('p')

    divOpinionUser.classList.add('flex-container', 'profileOpinionBook')
    divInfoUser.classList.add('flex-container', 'profileTitleBook')
    divStar.classList.add('estrella', 'rellena')
    divRate.classList.add('flex-container', 'profileRateBook')
    divBook.classList.add('flex-container', 'profileBookDetails')
    divOpinion.classList.add('flex-container', 'profileOpinionText')

    pTitle.textContent = arrOpinonProfile[i].books[0].title
    pTitle.addEventListener('click', () => {
      chargeSection('DetalleLibro', arrOpinonProfile[i].books[0]._id)
    })
    pRate.textContent = arrOpinonProfile[i].rating
    pOpinion.textContent = arrOpinonProfile[i].opinion

    divBook.appendChild(pTitle)
    divRate.appendChild(pRate)
    divRate.appendChild(divStar)
    divInfoUser.appendChild(divBook)
    divInfoUser.appendChild(divRate)
    divOpinion.appendChild(pOpinion)
    divOpinionUser.appendChild(divInfoUser)
    divOpinionUser.appendChild(divOpinion)
    sectionOpinion.appendChild(divOpinionUser)
  }

  pageProfile++
  if (pageProfile === NUMPAGESPROFILE) {
    const btnAfter = document.querySelector('#afterProfile')
    btnAfter.disabled = true
  }
  const btnBefore = document.querySelector('#beforeProfile')
  btnBefore.disabled = false
}

const printBefore = (sectionOpinion) => {
  const divOpinions = document.querySelector('.profileOpinion')
  const allOpinions = document.querySelectorAll('.profileOpinionBook')
  for (const opinion of allOpinions) {
    divOpinions.removeChild(opinion)
  }

  let bucle = NUMOPINONPROFILEPERPAGE * (pageProfile - 1)

  for (let i = bucle - NUMOPINONPROFILEPERPAGE; i < bucle; i++) {
    const divOpinionUser = document.createElement('div')
    const divInfoUser = document.createElement('div')
    const divBook = document.createElement('div')
    const pTitle = document.createElement('p')
    const divRate = document.createElement('div')
    const pRate = document.createElement('p')
    const divStar = document.createElement('div')
    const divOpinion = document.createElement('div')
    const pOpinion = document.createElement('p')

    divOpinionUser.classList.add('flex-container', 'profileOpinionBook')
    divInfoUser.classList.add('flex-container', 'profileTitleBook')
    divStar.classList.add('estrella', 'rellena')
    divRate.classList.add('flex-container', 'profileRateBook')
    divBook.classList.add('flex-container', 'profileBookDetails')
    divOpinion.classList.add('flex-container', 'profileOpinionText')

    pTitle.textContent = arrOpinonProfile[i].books[0].title
    pTitle.addEventListener('click', () => {
      chargeSection('DetalleLibro', arrOpinonProfile[i].books[0]._id)
    })
    pRate.textContent = arrOpinonProfile[i].rating
    pOpinion.textContent = arrOpinonProfile[i].opinion

    divBook.appendChild(pTitle)
    divRate.appendChild(pRate)
    divRate.appendChild(divStar)
    divInfoUser.appendChild(divBook)
    divInfoUser.appendChild(divRate)
    divOpinion.appendChild(pOpinion)
    divOpinionUser.appendChild(divInfoUser)
    divOpinionUser.appendChild(divOpinion)
    sectionOpinion.appendChild(divOpinionUser)
  }

  pageProfile--
  if (pageProfile === 1) {
    const btnBefore = document.querySelector('#beforeProfile')
    btnBefore.disabled = true
  }
  const btnAfter = document.querySelector('#afterProfile')
  btnAfter.disabled = false
}
