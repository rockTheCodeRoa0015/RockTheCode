import { chargeSection } from '../../utils/router'
import './MyProfile.css'

let arrOpinonMyProfile = []
const NUMOPINONMYPROFILEPERPAGE = 5
let NUMPAGESMYPROFILE = 0
let pageMyProfile = 1

export const MyProfile = (parentNode) => {
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

  fetch('http://localhost:3000/api/v1/users/' + localStorage.getItem('_id'), {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
    .then((res) => res.json())
    .then((profile) => {
      const divImg = document.createElement('div')
      const imgCam = document.createElement('img')
      const imgProfile = document.createElement('img')
      const h3Username = document.createElement('h3')
      const h4Email = document.createElement('h4')
      const inImg = document.createElement('input')
      const btnChangeImg = document.createElement('button')

      imgCam.src = './img/camara.png'
      imgCam.addEventListener('click', () => {
        inImg.click()
      })

      imgProfile.src = profile.avatar
      imgProfile.addEventListener('click', () => {
        inImg.click()
      })
      h3Username.textContent = profile.userName
      h4Email.textContent = profile.email
      inImg.type = 'file'
      inImg.accept = 'image/png, .jpeg, .jpg, image/gif'
      inImg.addEventListener('change', (e) => {
        previewImg(e, imgProfile, btnChangeImg)
      })
      btnChangeImg.textContent = 'Cambiar'
      btnChangeImg.addEventListener('click', (e) => {
        changeImgProfile(inImg, btnChangeImg)
      })

      divImg.appendChild(imgProfile)
      divImg.appendChild(imgCam)
      sectionProfile.appendChild(divImg)
      sectionProfile.appendChild(btnChangeImg)
      sectionProfile.appendChild(h3Username)
      sectionProfile.appendChild(h4Email)
      sectionProfile.appendChild(inImg)

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

  fetch(
    'http://localhost:3000/api/v1/opinions/getByUser/' +
      localStorage.getItem('_id'),
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }
  )
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
  btnBefore.id = 'beforeMyProfile'
  btnBefore.disabled = true
  btnBefore.addEventListener('click', () => {
    printBefore(sectionOpinion)
  })
  btnAfter.textContent = '>>'
  btnAfter.id = 'afterMyProfile'
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
  arrOpinonMyProfile = []
  pageMyProfile = 1
  const btnAfter = document.querySelector('#afterMyProfile')
  btnAfter.disabled = true
  const btnBefore = document.querySelector('#beforeMyProfile')
  btnBefore.disabled = true
  for (const opinion of opinions) {
    arrOpinonMyProfile.push(opinion)
  }

  NUMPAGESMYPROFILE = Math.ceil(
    arrOpinonMyProfile.length / NUMOPINONMYPROFILEPERPAGE
  )

  let bucle =
    opinions.length > NUMOPINONMYPROFILEPERPAGE
      ? NUMOPINONMYPROFILEPERPAGE
      : opinions.length

  for (let i = 0; i < bucle; i++) {
    templateOpinions(sectionOpinion, i)
  }

  if (arrOpinonMyProfile.length > NUMOPINONMYPROFILEPERPAGE) {
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
    arrOpinonMyProfile.length > NUMOPINONMYPROFILEPERPAGE * (pageMyProfile + 1)
      ? NUMOPINONMYPROFILEPERPAGE * (pageMyProfile + 1)
      : arrOpinonMyProfile.length

  for (let i = pageMyProfile * NUMOPINONMYPROFILEPERPAGE; i < bucle; i++) {
    templateOpinions(sectionOpinion, i)
  }

  pageMyProfile++
  if (pageMyProfile === NUMPAGESMYPROFILE) {
    const btnAfter = document.querySelector('#afterMyProfile')
    btnAfter.disabled = true
  }
  const btnBefore = document.querySelector('#beforeMyProfile')
  btnBefore.disabled = false
}

const printBefore = (sectionOpinion) => {
  const divOpinions = document.querySelector('.profileOpinion')
  const allOpinions = document.querySelectorAll('.profileOpinionBook')
  for (const opinion of allOpinions) {
    divOpinions.removeChild(opinion)
  }

  let bucle = NUMOPINONMYPROFILEPERPAGE * (pageMyProfile - 1)

  for (let i = bucle - NUMOPINONMYPROFILEPERPAGE; i < bucle; i++) {
    templateOpinions(sectionOpinion, i)
  }

  pageMyProfile--
  if (pageMyProfile === 1) {
    const btnBefore = document.querySelector('#beforeMyProfile')
    btnBefore.disabled = true
  }
  const btnAfter = document.querySelector('#afterMyProfile')
  btnAfter.disabled = false
}

const previewImg = (e, imgProfile, btnChangeImg) => {
  imgProfile.src = URL.createObjectURL(e.target.files[0])
  imgProfile.onload = function () {
    URL.revokeObjectURL(imgProfile.src) // free memory
  }
  btnChangeImg.style.display = 'block'
}

const changeImgProfile = async (inImg, btnChangeImg) => {
  const formData = new FormData()
  formData.append('avatar', inImg.files[0])

  const dataUp = await fetch(
    'http://localhost:3000/api/v1/users/' + localStorage.getItem('_id'),
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'PUT',
      body: formData
    }
  )
  const dataResUp = await dataUp.json()
  if (dataResUp.mensaje) {
    localStorage.setItem('avatar', dataResUp.updateUser.avatar)
    const imgProfile = document.querySelectorAll('.menu>img')
    for (const img of imgProfile) {
      img.src = dataResUp.updateUser.avatar
    }
    btnChangeImg.style.display = 'none'
  } else {
    alert('Error al cambiar la foto de perfil')
  }
}

const templateOpinions = (sectionOpinion, i) => {
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

  pTitle.textContent = arrOpinonMyProfile[i].books[0].title
  pTitle.addEventListener('click', () => {
    chargeSection('DetalleLibro', arrOpinonMyProfile[i].books[0]._id)
  })
  pRate.textContent = arrOpinonMyProfile[i].rating
  pOpinion.textContent = arrOpinonMyProfile[i].opinion

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
