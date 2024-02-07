import './Suggestion.css'

export const Suggestion = (parentNode) => {
  const section = document.createElement('section')
  const h2 = document.createElement('h2')
  h2.textContent = 'Sugerencias'
  section.appendChild(h2)
  const form = document.createElement('form')
  const divInfoBook = document.createElement('div')
  const img = document.createElement('img')
  const inImg = document.createElement('input')
  const divDetails = document.createElement('div')
  const divTitile = document.createElement('div')
  const lbTitle = document.createElement('label')
  const inputTitle = document.createElement('input')
  const divAuthor = document.createElement('div')
  const lbAuthor = document.createElement('label')
  const inAuthor = document.createElement('input')
  const divPrice = document.createElement('div')
  const lbPrice = document.createElement('label')
  const inPrice = document.createElement('input')
  const divSyn = document.createElement('div')
  const lbSyn = document.createElement('label')
  const aSyn = document.createElement('textarea')
  const divCat = document.createElement('div')
  const lbCat = document.createElement('label')
  const divVal = document.createElement('div')
  const lbVal = document.createElement('label')
  const divOpinion = document.createElement('div')
  const aOpinion = document.createElement('textarea')
  const lbOpinion = document.createElement('label')
  const btnSubmit = document.createElement('button')
  const divValidator = document.createElement('div')

  img.id = 'imgBook'
  inputTitle.id = 'titulo'
  inAuthor.id = 'autor'
  inPrice.id = 'precio'
  aSyn.id = 'sinopsis'
  aOpinion.id = 'opinion'

  img.src = './img/uploadImg.png'
  img.addEventListener('click', () => {
    inImg.click()
  })
  inImg.type = 'file'
  inImg.accept = 'image/png, .jpeg, .jpg, image/gif'
  inImg.addEventListener('change', (e) => {
    previewImg(e, img)
  })
  lbTitle.textContent = 'Título*'
  lbAuthor.textContent = 'Autor*'
  lbPrice.textContent = 'Precio*'
  inPrice.type = 'number'
  inPrice.step = '0.01'
  lbSyn.textContent = 'Sinopsis*'
  lbCat.textContent = 'Categorías*'
  lbVal.textContent = 'Valoración*'
  lbOpinion.textContent = 'Opinión*'
  btnSubmit.textContent = 'Enviar'
  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    postBook()
  })

  section.classList.add('flex-container', 'sectionSugg')
  form.classList.add('flex-container', 'formSugg')
  divInfoBook.classList.add('flex-container', 'infoBookSugg')
  divDetails.classList.add('flex-container', 'detailsSugg')
  divTitile.classList.add('flex-container', 'titleSugg')
  divAuthor.classList.add('flex-container', 'authorSugg')
  divPrice.classList.add('flex-container', 'priceSugg')
  divSyn.classList.add('flex-container', 'synSugg')
  divCat.classList.add('flex-container', 'catSugg')
  divVal.classList.add('flex-container', 'valSugg')
  divOpinion.classList.add('flex-container', 'opinionSugg')
  divValidator.classList.add('flex-container', 'validator')

  divTitile.appendChild(lbTitle)
  divTitile.appendChild(inputTitle)
  divAuthor.appendChild(lbAuthor)
  divAuthor.appendChild(inAuthor)
  divPrice.appendChild(lbPrice)
  divPrice.appendChild(inPrice)
  divSyn.appendChild(lbSyn)
  divSyn.appendChild(aSyn)
  divCat.appendChild(lbCat)
  divVal.appendChild(lbVal)
  divOpinion.appendChild(lbOpinion)
  divOpinion.appendChild(aOpinion)

  const divStar = document.createElement('div')
  divStar.classList.add('flex-container', 'starSugg')
  for (let i = 1; i <= 5; i++) {
    const estrella = document.createElement('div')
    estrella.id = 'starSugg' + i
    estrella.addEventListener('click', (event) => {
      colorStars(event.target.id)
    })
    estrella.classList.add('estrella')
    divStar.appendChild(estrella)
  }
  divVal.appendChild(divStar)

  divDetails.appendChild(divTitile)
  divDetails.appendChild(divAuthor)
  divDetails.appendChild(divPrice)
  divDetails.appendChild(divSyn)
  divInfoBook.appendChild(img)
  divInfoBook.appendChild(inImg)
  divInfoBook.appendChild(divDetails)
  form.appendChild(divInfoBook)
  form.appendChild(divCat)
  form.appendChild(divVal)
  form.appendChild(divOpinion)
  form.appendChild(btnSubmit)
  form.appendChild(divValidator)
  section.appendChild(form)
  parentNode.appendChild(section)

  getCategories(divCat)
}

const getCategories = (divCat) => {
  const divAllCat = document.createElement('div')
  divAllCat.classList.add('flex-container', 'catPSugg')
  fetch('http://localhost:3000/api/v1/categories/')
    .then((res) => res.json())
    .then((categories) => {
      for (const categorie of categories) {
        const p = document.createElement('p')
        p.textContent = categorie.categorie
        p.id = categorie._id
        p.classList.add('pSugg')
        p.addEventListener('click', () => {
          p.classList.toggle('pSugg-show')
        })
        divAllCat.appendChild(p)
      }
    })

  divCat.appendChild(divAllCat)
}

const colorStars = (id) => {
  const divStar = document.querySelectorAll('.starSugg>div')
  const num = parseInt(id.substring(id.length - 1))
  for (let i = 0; i < divStar.length; i++) {
    divStar[i].classList.remove('rellena')
    if (i < num) {
      divStar[i].classList.add('rellena')
    }
  }
}

const previewImg = (e, img) => {
  img.src = URL.createObjectURL(e.target.files[0])
  img.onload = function () {
    URL.revokeObjectURL(img.src) // free memory
  }
}

const postBook = async () => {
  if (verifyData()) {
    const title = document.querySelector('#titulo')
    const author = document.querySelector('#autor')
    const price = document.querySelector('#precio')
    const synospsi = document.querySelector('#sinopsis')
    const imgBook = document.querySelector('.infoBookSugg > input')
    const categoires = document.querySelectorAll('.pSugg-show')
    const rating = document.querySelectorAll('.starSugg >.rellena')
    const opinion = document.querySelector('#opinion')
    const formData = new FormData()
    formData.append('title', title.value.toUpperCase())
    formData.append('author', author.value.toUpperCase())
    formData.append('price', Number(parseFloat(price.value).toFixed(2)))
    formData.append('synopsis', synospsi.value)
    formData.append('rating', rating.length)
    formData.append('cover', imgBook.files[0])
    for (const categoire of categoires) {
      formData.append('categories', categoire.id)
    }

    const dataUp = await fetch('http://localhost:3000/api/v1/books/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((dataResUp) => {
        if (dataResUp.mensaje) {
          postOpinionBook(dataResUp, rating, opinion, categoires)
        } else {
          if (dataResUp) {
            alert(dataResUp)
            clearElements()
          } else {
            alert('Error al guardar el libro sugerido')
          }
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const postOpinionBook = (dataResUp, rating, opinion, categoires) => {
  const dataUp = fetch('http://localhost:3000/api/v1/opinions/', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'POST',
    body: JSON.stringify({
      opinion: opinion.value,
      books: dataResUp.bookSaved._id,
      users: localStorage.getItem('_id'),
      rating: rating.length
    })
  })
    .then((resOp) => resOp.json())
    .then((dataResOp) => {
      if (dataResOp.mensaje) {
        postCategorieBook(dataResUp, categoires)
      } else {
        alert('Error al guardar la opinion')
      }
    })
}

const postCategorieBook = (dataResUp, categoires) => {
  for (const categoire of categoires) {
    const dataUp = fetch(
      'http://localhost:3000/api/v1/categories/' + categoire.id,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        method: 'PUT',
        body: JSON.stringify({
          books: dataResUp.bookSaved._id
        })
      }
    )
      .then((res) => res.json())
      .then((dataRes) => {
        if (dataRes.mensaje) {
          clearElements()
          alert('Libro registrado')
        } else {
          alert('Error al guardar los libros en sus categorias')
        }
      })
  }
}

const verifyData = () => {
  let verify = true
  const title = document.querySelector('#titulo')
  const author = document.querySelector('#autor')
  const price = document.querySelector('#precio')
  const synospsi = document.querySelector('#sinopsis')
  const imgBook = document.querySelector('.infoBookSugg > input')
  const categoires = document.querySelectorAll('.pSugg-show')
  const rating = document.querySelectorAll('.starSugg >.rellena')
  const opinion = document.querySelector('#opinion')
  const validador = document.querySelector('.validator')
  const pValidator = document.querySelectorAll('.validator>p')
  for (const p of pValidator) {
    validador.removeChild(p)
  }
  validador.style.display = 'none'

  if (title.value === '') {
    verify = false
    const p = document.createElement('p')
    p.textContent = 'Falta el titulo'
    validador.appendChild(p)
  }
  if (author.value === '') {
    verify = false
    const p = document.createElement('p')
    p.textContent = 'Falta el autor'
    validador.appendChild(p)
  }
  if (price.value === '') {
    verify = false
    const p = document.createElement('p')
    p.textContent = 'Falta el precio'
    validador.appendChild(p)
  }
  if (synospsi.value === '') {
    verify = false
    const p = document.createElement('p')
    p.textContent = 'Falta la sinopsis'
    validador.appendChild(p)
  }
  if (imgBook.files[0] === undefined) {
    verify = false
    const p = document.createElement('p')
    p.textContent = 'Falta la caratula del libro'
    validador.appendChild(p)
  }
  if (categoires.length === 0) {
    verify = false
    const p = document.createElement('p')
    p.textContent = 'Seleccione al menos una categoría'
    validador.appendChild(p)
  }
  if (rating.length === 0) {
    verify = false
    const p = document.createElement('p')
    p.textContent = 'Falta la valoración'
    validador.appendChild(p)
  }
  if (opinion.value === '') {
    verify = false
    const p = document.createElement('p')
    p.textContent = 'Falta la opinión'
    validador.appendChild(p)
  }
  if (!verify) {
    validador.style.display = 'flex'
  }

  return verify
}

const clearElements = () => {
  const title = document.querySelector('#titulo')
  const author = document.querySelector('#autor')
  const price = document.querySelector('#precio')
  const synospsi = document.querySelector('#sinopsis')
  const imgBook = document.querySelector('.infoBookSugg > input')
  const img = document.querySelector('.infoBookSugg>img')
  const categoires = document.querySelectorAll('.pSugg-show')
  const rating = document.querySelectorAll('.starSugg >.rellena')
  const opinion = document.querySelector('#opinion')
  title.value = ''
  author.value = ''
  price.value = ''
  synospsi.value = ''
  opinion.value = ''
  for (const star of rating) {
    star.classList.remove('rellena')
  }
  for (const categoire of categoires) {
    categoire.click()
  }
  imgBook.value = ''
  img.src = './img/uploadImg.png'
}
