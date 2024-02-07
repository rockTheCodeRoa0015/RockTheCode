import { chargeSection } from '../hero/Hero'
import './BookDetail.css'

let arrOpinonDetails = []
const NUMOPINIONDETAILPERPAGE = 5
let NUMPAGESDETAIL = 0
let pageDetail = 1

export const BookDetails = (parentNode, id) => {
  const sectionBook = document.createElement('section')
  const sectionOpinion = document.createElement('section')
  const sectionForm = document.createElement('section')
  parentNode.appendChild(sectionBook)
  parentNode.appendChild(sectionOpinion)
  btnPaginator(parentNode, id, sectionOpinion)
  parentNode.appendChild(sectionForm)
  const divInfo = document.createElement('div')
  const divImg = document.createElement('div')
  const divDetail = document.createElement('div')

  const img = document.createElement('img')
  const divFav = document.createElement('div')
  const pTitle = document.createElement('p')
  const pAuthor = document.createElement('p')
  const divCat = document.createElement('div')
  const pPrice = document.createElement('p')
  const divRate = document.createElement('div')
  const pRate = document.createElement('p')
  const divStar = document.createElement('div')
  const pSynopsis = document.createElement('p')

  sectionBook.classList.add('flex-container', 'sectionDetails')
  sectionOpinion.classList.add('flex-container', 'sectionDetailsOpinion')
  sectionForm.classList.add('flex-container', 'detailPostOpinion')
  divFav.classList.add('fav')
  divInfo.classList.add('flex-container', 'infoDetails')
  divDetail.classList.add('flex-container', 'Details')
  divStar.classList.add('estrella', 'rellena')
  divRate.classList.add('flex-container', 'rateDetails')
  divCat.classList.add('flex-container', 'catDetails')

  fetch('http://localhost:3000/api/v1/books/getAvgRate/' + id)
    .then((res) => res.json())
    .then((book) => {
      img.src = book.cover
      pTitle.textContent = book.title
      pAuthor.textContent = book.author
      pPrice.textContent = book.price + '€'
      pSynopsis.textContent = book.synopsis
      pRate.textContent = book.rating[0]

      for (const categoria of book.categories) {
        const span = document.createElement('span')
        span.textContent = categoria.categorie
        divCat.appendChild(span)
      }
    })

  divImg.appendChild(img)
  divRate.appendChild(pRate)
  divRate.appendChild(divStar)
  divDetail.appendChild(divFav)
  divDetail.appendChild(pTitle)
  divDetail.appendChild(pAuthor)
  divDetail.appendChild(divCat)
  divDetail.appendChild(pPrice)
  divDetail.appendChild(divRate)
  divDetail.appendChild(pSynopsis)
  divInfo.appendChild(divImg)
  divInfo.appendChild(divDetail)
  sectionBook.appendChild(divInfo)
  //parentNode.appendChild(sectionBook)

  bookOpinion(sectionOpinion, id)
  if (localStorage.getItem('user')) {
    getUser(divFav, id)
  }
}

const bookOpinion = (parentNode, id) => {
  //const sectionOpinion = document.querySelector('.sectionDetailsOpinion')

  fetch('http://localhost:3000/api/v1/opinions/getByBook/' + id)
    .then((res) => res.json())
    .then((opinions) => {
      printOpinion(opinions, parentNode, id)
    })

  //parentNode.appendChild(sectionOpinion)
  if (localStorage.getItem('user')) {
    const sectionForm = document.querySelector('.detailPostOpinion')
    postOpinion(sectionForm, id)
  }
}

const printOpinion = (opinions, parentNode, id) => {
  arrOpinonDetails = []
  pageDetail = 1
  const btnAfter = document.querySelector('#afterDetail')
  btnAfter.disabled = true
  const btnBefore = document.querySelector('#beforeDetail')
  btnBefore.disabled = true
  for (const opinion of opinions) {
    arrOpinonDetails.push(opinion)
  }

  NUMPAGESDETAIL = Math.ceil(arrOpinonDetails.length / NUMOPINIONDETAILPERPAGE)

  let bucle =
    opinions.length > NUMOPINIONDETAILPERPAGE
      ? NUMBOOKNUMOPINIONDETAILPERPAGEPERPAGE
      : opinions.length

  for (let i = 0; i < bucle; i++) {
    const divOpinionUser = document.createElement('div')
    const divInfoUser = document.createElement('div')
    const divUser = document.createElement('div')
    const imgUser = document.createElement('img')
    const pUsername = document.createElement('p')
    const divRate = document.createElement('div')
    const pRate = document.createElement('p')
    const divStar = document.createElement('div')
    const divOpinion = document.createElement('div')
    const divTextOpinon = document.createElement('div')
    const pOpinion = document.createElement('p')
    const btnEdit = document.createElement('button')
    const divareaOpinon = document.createElement('div')
    const areaOpinion = document.createElement('textarea')
    const btnUpOp = document.createElement('button')

    divOpinionUser.classList.add('flex-container', 'OpinionUserDetail')
    //sectionOpinion.classList.add('flex-container', 'sectionDetailsOpinion')
    divInfoUser.classList.add('flex-container', 'divDetailInfoUser')
    divStar.classList.add('estrella', 'rellena')
    divRate.classList.add('flex-container', 'rateDetails')
    divUser.classList.add('flex-container', 'userDetail')
    divOpinion.classList.add('flex-container', 'opinionDetail')
    divTextOpinon.classList.add('flex-container', 'textOpinion')
    divareaOpinon.classList.add('flex-container', 'areaOpinion')

    imgUser.src = opinions[i].users[0].avatar
    imgUser.id = opinions[i].users[0]._id
    imgUser.addEventListener('click', () => {
      if (opinions[i].users[0]._id === localStorage.getItem('_id')) {
        chargeSection('Perfil')
      } else {
        if (localStorage.getItem('user')) {
          chargeSection('OtroPerfil', opinions[i].users[0]._id)
        }
      }
    })
    pUsername.textContent = opinions[i].users[0].userName
    pRate.textContent = opinions[i].rating
    pOpinion.textContent = opinions[i].opinion
    areaOpinion.textContent = opinions[i].opinion
    areaOpinion.disabled = true
    btnEdit.textContent = 'Editar'
    btnEdit.addEventListener('click', () => {
      showEdit(divTextOpinon, divareaOpinon, areaOpinion)
    })
    btnUpOp.textContent = 'Enviar'
    btnUpOp.addEventListener('click', () => {
      upOpinion(opinions[i]._id, divTextOpinon, divareaOpinon, areaOpinion, id)
    })

    divRate.appendChild(pRate)
    divRate.appendChild(divStar)
    divUser.appendChild(imgUser)
    divUser.appendChild(pUsername)
    divInfoUser.appendChild(divUser)
    divInfoUser.appendChild(divRate)
    divTextOpinon.appendChild(pOpinion)
    divareaOpinon.appendChild(areaOpinion)
    if (
      opinions[i].users[0]._id === localStorage.getItem('_id') ||
      localStorage.getItem('rol') === 'admin'
    ) {
      divTextOpinon.appendChild(btnEdit)
      divareaOpinon.appendChild(btnUpOp)
    }
    divOpinion.appendChild(divTextOpinon)
    divOpinion.appendChild(divareaOpinon)
    divOpinionUser.appendChild(divInfoUser)
    divOpinionUser.appendChild(divOpinion)
    parentNode.appendChild(divOpinionUser)

    if (localStorage.getItem('_id') === opinions[i].users[0]._id) {
      const sec = document.querySelector('.detailPostOpinion')
      sec.style.display = 'none'
    }
  }

  if (opinions.length > NUMOPINIONDETAILPERPAGE) {
    btnAfter.disabled = false
  }
}

const printAfter = (parentNode, id) => {
  const divOpinion = document.querySelector('.sectionDetailsOpinion')
  while (divOpinion.firstChild) {
    divBdivOpinionooks.removeChild(divOpinion.firstChild)
  }

  let bucle =
    arrOpinonDetails.length > NUMOPINIONDETAILPERPAGE * (pageDetail + 1)
      ? NUMOPINIONDETAILPERPAGE * (pageDetail + 1)
      : arrOpinonDetails.length

  for (let i = pageDetail * NUMOPINIONDETAILPERPAGE; i < bucle; i++) {
    const divOpinionUser = document.createElement('div')
    const divInfoUser = document.createElement('div')
    const divUser = document.createElement('div')
    const imgUser = document.createElement('img')
    const pUsername = document.createElement('p')
    const divRate = document.createElement('div')
    const pRate = document.createElement('p')
    const divStar = document.createElement('div')
    const divOpinion = document.createElement('div')
    const divTextOpinon = document.createElement('div')
    const pOpinion = document.createElement('p')
    const btnEdit = document.createElement('button')
    const divareaOpinon = document.createElement('div')
    const areaOpinion = document.createElement('textarea')
    const btnUpOp = document.createElement('button')

    divOpinionUser.classList.add('flex-container', 'OpinionUserDetail')
    //sectionOpinion.classList.add('flex-container', 'sectionDetailsOpinion')
    divInfoUser.classList.add('flex-container', 'divDetailInfoUser')
    divStar.classList.add('estrella', 'rellena')
    divRate.classList.add('flex-container', 'rateDetails')
    divUser.classList.add('flex-container', 'userDetail')
    divOpinion.classList.add('flex-container', 'opinionDetail')
    divTextOpinon.classList.add('flex-container', 'textOpinion')
    divareaOpinon.classList.add('flex-container', 'areaOpinion')

    imgUser.src = arrOpinonDetails[i].users[0].avatar
    imgUser.id = arrOpinonDetails[i].users[0]._id
    imgUser.addEventListener('click', () => {
      if (arrOpinonDetails[i].users[0]._id === localStorage.getItem('_id')) {
        chargeSection('Perfil')
      } else {
        if (localStorage.getItem('user')) {
          chargeSection('OtroPerfil', arrOpinonDetails[i].users[0]._id)
        }
      }
    })
    pUsername.textContent = arrOpinonDetails[i].users[0].userName
    pRate.textContent = arrOpinonDetails[i].rating
    pOpinion.textContent = arrOpinonDetails[i].opinion
    areaOpinion.textContent = arrOpinonDetails[i].opinion
    areaOpinion.disabled = true
    btnEdit.textContent = 'Editar'
    btnEdit.addEventListener('click', () => {
      showEdit(divTextOpinon, divareaOpinon, areaOpinion)
    })
    btnUpOp.textContent = 'Enviar'
    btnUpOp.addEventListener('click', () => {
      upOpinion(
        arrOpinonDetails[i]._id,
        divTextOpinon,
        divareaOpinon,
        areaOpinion,
        id
      )
    })

    divRate.appendChild(pRate)
    divRate.appendChild(divStar)
    divUser.appendChild(imgUser)
    divUser.appendChild(pUsername)
    divInfoUser.appendChild(divUser)
    divInfoUser.appendChild(divRate)
    divTextOpinon.appendChild(pOpinion)
    divareaOpinon.appendChild(areaOpinion)
    if (
      arrOpinonDetails[i].users[0]._id === localStorage.getItem('_id') ||
      localStorage.getItem('rol') === 'admin'
    ) {
      divTextOpinon.appendChild(btnEdit)
      divareaOpinon.appendChild(btnUpOp)
    }
    divOpinion.appendChild(divTextOpinon)
    divOpinion.appendChild(divareaOpinon)
    divOpinionUser.appendChild(divInfoUser)
    divOpinionUser.appendChild(divOpinion)
    parentNode.appendChild(divOpinionUser)

    if (localStorage.getItem('_id') === arrOpinonDetails[i].users[0]._id) {
      const sec = document.querySelector('.detailPostOpinion')
      sec.style.display = 'none'
    }
  }

  pageDetail++
  if (pageDetail === NUMPAGESDETAIL) {
    const btnAfter = document.querySelector('#after')
    btnAfter.disabled = true
  }
  const btnBefore = document.querySelector('#before')
  btnBefore.disabled = false
}

const printBefore = (parentNode, id) => {
  const divOpinion = document.querySelector('.sectionDetailsOpinion')
  while (divOpinion.firstChild) {
    divOpinion.removeChild(divOpinion.firstChild)
  }

  let bucle = NUMOPINIONDETAILPERPAGE * (pageDetail - 1)

  for (let i = bucle - NUMOPINIONDETAILPERPAGE; i < bucle; i++) {
    const divOpinionUser = document.createElement('div')
    const divInfoUser = document.createElement('div')
    const divUser = document.createElement('div')
    const imgUser = document.createElement('img')
    const pUsername = document.createElement('p')
    const divRate = document.createElement('div')
    const pRate = document.createElement('p')
    const divStar = document.createElement('div')
    const divOpinion = document.createElement('div')
    const divTextOpinon = document.createElement('div')
    const pOpinion = document.createElement('p')
    const btnEdit = document.createElement('button')
    const divareaOpinon = document.createElement('div')
    const areaOpinion = document.createElement('textarea')
    const btnUpOp = document.createElement('button')

    divOpinionUser.classList.add('flex-container', 'OpinionUserDetail')
    //sectionOpinion.classList.add('flex-container', 'sectionDetailsOpinion')
    divInfoUser.classList.add('flex-container', 'divDetailInfoUser')
    divStar.classList.add('estrella', 'rellena')
    divRate.classList.add('flex-container', 'rateDetails')
    divUser.classList.add('flex-container', 'userDetail')
    divOpinion.classList.add('flex-container', 'opinionDetail')
    divTextOpinon.classList.add('flex-container', 'textOpinion')
    divareaOpinon.classList.add('flex-container', 'areaOpinion')

    imgUser.src = arrOpinonDetails[i].users[0].avatar
    imgUser.id = arrOpinonDetails[i].users[0]._id
    imgUser.addEventListener('click', () => {
      if (arrOpinonDetails[i].users[0]._id === localStorage.getItem('_id')) {
        chargeSection('Perfil')
      } else {
        if (localStorage.getItem('user')) {
          chargeSection('OtroPerfil', arrOpinonDetails[i].users[0]._id)
        }
      }
    })
    pUsername.textContent = arrOpinonDetails[i].users[0].userName
    pRate.textContent = arrOpinonDetails[i].rating
    pOpinion.textContent = arrOpinonDetails[i].opinion
    areaOpinion.textContent = arrOpinonDetails[i].opinion
    areaOpinion.disabled = true
    btnEdit.textContent = 'Editar'
    btnEdit.addEventListener('click', () => {
      showEdit(divTextOpinon, divareaOpinon, areaOpinion)
    })
    btnUpOp.textContent = 'Enviar'
    btnUpOp.addEventListener('click', () => {
      upOpinion(
        arrOpinonDetails[i]._id,
        divTextOpinon,
        divareaOpinon,
        areaOpinion,
        id
      )
    })

    divRate.appendChild(pRate)
    divRate.appendChild(divStar)
    divUser.appendChild(imgUser)
    divUser.appendChild(pUsername)
    divInfoUser.appendChild(divUser)
    divInfoUser.appendChild(divRate)
    divTextOpinon.appendChild(pOpinion)
    divareaOpinon.appendChild(areaOpinion)
    if (
      arrOpinonDetails[i].users[0]._id === localStorage.getItem('_id') ||
      localStorage.getItem('rol') === 'admin'
    ) {
      divTextOpinon.appendChild(btnEdit)
      divareaOpinon.appendChild(btnUpOp)
    }
    divOpinion.appendChild(divTextOpinon)
    divOpinion.appendChild(divareaOpinon)
    divOpinionUser.appendChild(divInfoUser)
    divOpinionUser.appendChild(divOpinion)
    parentNode.appendChild(divOpinionUser)

    if (localStorage.getItem('_id') === arrOpinonDetails[i].users[0]._id) {
      const sec = document.querySelector('.detailPostOpinion')
      sec.style.display = 'none'
    }
  }

  pageDetail--
  if (pageDetail === 1) {
    const btnBefore = document.querySelector('#before')
    btnBefore.disabled = true
  }
  const btnAfter = document.querySelector('#after')
  btnAfter.disabled = false
}

const postOpinion = (parentNode, id) => {
  //const sectionForm = document.createElement('section')
  const h2 = document.createElement('h2')
  const form = document.createElement('div')
  const divEstrellas = document.createElement('div')
  const textArea = document.createElement('textarea')
  const btnSend = document.createElement('button')

  for (let i = 1; i <= 5; i++) {
    const estrella = document.createElement('div')
    estrella.id = 'star' + i
    estrella.addEventListener('click', (event) => {
      colorStars(event.target.id)
    })
    estrella.classList.add('estrella')
    divEstrellas.appendChild(estrella)
  }

  //sectionForm.classList.add('flex-container', 'detailPostOpinion')
  form.classList.add('flex-container', 'formOpinion')
  divEstrellas.classList.add('flex-container', 'starOpinion')

  h2.textContent = 'Danos tu opinion'
  btnSend.textContent = 'Enviar'
  btnSend.addEventListener('click', () => {
    console.log(id)
    sendOpinion(textArea, id)
  })
  textArea.placeholder = 'Opinion'

  form.appendChild(divEstrellas)
  form.appendChild(textArea)
  form.appendChild(btnSend)
  parentNode.appendChild(h2)
  parentNode.appendChild(form)
  //parentNode.appendChild(sectionForm)
}

const colorStars = (id) => {
  const divStar = document.querySelectorAll('.starOpinion>div')
  const num = parseInt(id.substring(id.length - 1))
  for (let i = 0; i < divStar.length; i++) {
    divStar[i].classList.remove('rellena')
    if (i < num) {
      divStar[i].classList.add('rellena')
    }
  }
}

const showEdit = (divTextOpinon, divareaOpinon, areaOpinion) => {
  divTextOpinon.style.display = 'none'
  divareaOpinon.style.display = 'flex'
  areaOpinion.disabled = false
}

const upOpinion = async (
  id,
  divTextOpinon,
  divareaOpinon,
  areaOpinion,
  Bookid
) => {
  const dataUp = await fetch('http://localhost:3000/api/v1/opinions/' + id, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'PUT',
    body: JSON.stringify({
      opinion: areaOpinion.value
    })
  })

  // Convierte la respuesta a formato JSON
  const dataResUp = await dataUp.json()

  if (dataResUp.mensaje) {
    divTextOpinon.style.display = 'flex'
    divareaOpinon.style.display = 'none'
    areaOpinion.disabled = true
    chargeSection('DetalleLibro', Bookid)
  } else {
    alert('Error al modificar la opinion')
  }
}

const sendOpinion = async (textArea, bookid) => {
  const divStar = document.querySelectorAll('.starOpinion >.rellena')
  console.log(divStar.length)
  if (divStar.length !== 0) {
    const dataUp = await fetch('http://localhost:3000/api/v1/opinions/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'POST',
      body: JSON.stringify({
        opinion: textArea.value,
        books: bookid,
        users: localStorage.getItem('_id'),
        rating: divStar.length
      })
    })

    // Convierte la respuesta a formato JSON
    const dataResUp = await dataUp.json()
    if (dataResUp.mensaje) {
      updateRateBook(bookid, divStar.length)
      //chargeSection('DetalleLibro', bookid)
    } else {
      alert('Error al enviar la opinion')
    }
  } else {
    alert('Valora el libro')
  }
}

const updateRateBook = async (bookid, rate) => {
  const dataUp = await fetch('http://localhost:3000/api/v1/books/' + bookid, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'PUT',
    body: JSON.stringify({
      rating: rate
    })
  })

  // Convierte la respuesta a formato JSON
  const dataResUp = await dataUp.json()
  if (dataResUp.mensaje) {
    chargeSection('DetalleLibro', bookid)
  } else {
    alert('Error al enviar la opinion')
  }
}

const getUser = (divFav, bookid) => {
  divFav.addEventListener('click', () => {
    if (divFav.className === 'fav-show') {
      divFav.className = 'fav'
    } else {
      divFav.className = 'fav-show'
    }
    updateFavouriteBook(divFav, bookid)
  })
  fetch('http://localhost:3000/api/v1/users/' + localStorage.getItem('_id'), {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
    .then((res) => res.json())
    .then((user) => {
      for (const book of user.favouritesBooks) {
        if (book._id === bookid) {
          divFav.className = 'fav-show'
        }
      }
    })
}

const updateFavouriteBook = (divFav, bookid) => {
  if (divFav.className === 'fav') {
    console.log('no favorito')
    delFavoriteBook(bookid)
  } else {
    console.log('favorito')
    postFavouriteBook(bookid)
  }
}

const delFavoriteBook = async (bookid) => {
  const dataUp = await fetch(
    'http://localhost:3000/api/v1/users/delFavoutieBook/' +
      localStorage.getItem('_id'),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'PUT',
      body: JSON.stringify({
        favouritesBooks: bookid
      })
    }
  )
  const dataResUp = await dataUp.json()
  if (!dataResUp.mensaje) {
    alert('Error al enviar la opinion')
  }
}

const postFavouriteBook = async (bookid) => {
  const dataUp = await fetch(
    'http://localhost:3000/api/v1/users/' + localStorage.getItem('_id'),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'PUT',
      body: JSON.stringify({
        favouritesBooks: bookid
      })
    }
  )
  const dataResUp = await dataUp.json()
  if (!dataResUp.mensaje) {
    alert('Error al enviar la opinion')
  }
}

const btnPaginator = (parentNode, id, sectionOpinion) => {
  const divBtn = document.createElement('div')
  const btnBefore = document.createElement('button')
  const btnAfter = document.createElement('button')
  divBtn.classList.add('flex-container')
  btnBefore.textContent = '<<'
  btnBefore.id = 'beforeDetail'
  btnBefore.disabled = true
  btnBefore.addEventListener('click', () => {
    printBefore(sectionOpinion, id)
  })
  btnAfter.textContent = '>>'
  btnAfter.id = 'afterDetail'
  btnAfter.disabled = true
  btnAfter.addEventListener('click', () => {
    printAfter(sectionOpinion, id)
  })
  divBtn.appendChild(btnBefore)
  divBtn.appendChild(btnAfter)
  parentNode.appendChild(divBtn)
}
