import { chargeSection } from '../hero/Hero'
import './Book.css'

let arrBook = []
const NUMBOOKPERPAGE = 8
let NUMPAGES = 0
let page = 1

export const Book = (parentNode, filter, param) => {
  let templateBooks
  switch (filter) {
    case 'All':
      templateBooks = getAllBooks()
      TemplateBook(parentNode, templateBooks)
      break
    case 'Name':
      templateBooks = getABooksByName(param)
      TemplateBook(parentNode, templateBooks)
      break
    case 'Categorie':
      templateBooks = getCategoriesBooks(param)
      break
    default:
      templateBooks = getAllBooks()
      TemplateBook(parentNode, templateBooks)
      break
  }
}

const TemplateBook = (parentNode, contain) => {
  const section = document.createElement('section')
  const h2 = document.createElement('h2')
  h2.textContent = 'Libros'

  section.classList.add('flex-container', 'tempBooks')
  section.appendChild(h2)
  getCategories(parentNode, section)
  section.appendChild(contain)
  /*** */
  const divBtn = document.createElement('div')
  const btnBefore = document.createElement('button')
  const btnAfter = document.createElement('button')
  divBtn.classList.add('flex-container')
  btnBefore.textContent = '<<'
  btnBefore.id = 'before'
  btnBefore.disabled = true
  btnBefore.addEventListener('click', () => {
    printBefore()
  })
  btnAfter.textContent = '>>'
  btnAfter.id = 'after'
  btnAfter.disabled = true
  btnAfter.addEventListener('click', () => {
    printAfter()
  })
  divBtn.appendChild(btnBefore)
  divBtn.appendChild(btnAfter)
  section.appendChild(divBtn)
  /**** */
  parentNode.appendChild(section)
}

const printBooks = (books, div) => {
  arrBook = []
  page = 1
  const btnAfter = document.querySelector('#after')
  btnAfter.disabled = true
  const btnBefore = document.querySelector('#before')
  btnBefore.disabled = true
  for (const book of books) {
    arrBook.push(book)
  }

  NUMPAGES = Math.ceil(arrBook.length / NUMBOOKPERPAGE)

  let bucle = books.length > NUMBOOKPERPAGE ? NUMBOOKPERPAGE : books.length

  for (let i = 0; i < bucle; i++) {
    const article = document.createElement('article')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')

    img.src = books[i].cover
    h3.textContent = books[i].title
    article.id = books[i]._id

    article.classList.add('flex-container', 'book')
    divImg.appendChild(img)
    article.appendChild(divImg)
    article.appendChild(h3)
    article.addEventListener('click', () => {
      chargeSection('DetalleLibro', books[i]._id)
    })
    div.appendChild(article)
  }

  if (books.length > NUMBOOKPERPAGE) {
    btnAfter.disabled = false
  }
}

const printAfter = () => {
  const divBooks = document.querySelector('.divBooks')
  while (divBooks.firstChild) {
    divBooks.removeChild(divBooks.firstChild)
  }

  let bucle =
    arrBook.length > NUMBOOKPERPAGE * (page + 1)
      ? NUMBOOKPERPAGE * (page + 1)
      : arrBook.length

  for (let i = page * NUMBOOKPERPAGE; i < bucle; i++) {
    const article = document.createElement('article')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')

    img.src = arrBook[i].cover
    h3.textContent = arrBook[i].title
    article.id = arrBook[i]._id

    article.classList.add('flex-container', 'book')
    divImg.appendChild(img)
    article.appendChild(divImg)
    article.appendChild(h3)
    article.addEventListener('click', () => {
      chargeSection('DetalleLibro', arrBook[i]._id)
    })
    divBooks.appendChild(article)
  }

  page++
  if (page === NUMPAGES) {
    const btnAfter = document.querySelector('#after')
    btnAfter.disabled = true
  }
  const btnBefore = document.querySelector('#before')
  btnBefore.disabled = false
}

const printBefore = () => {
  const divBooks = document.querySelector('.divBooks')
  while (divBooks.firstChild) {
    divBooks.removeChild(divBooks.firstChild)
  }

  let bucle = NUMBOOKPERPAGE * (page - 1)

  for (let i = bucle - NUMBOOKPERPAGE; i < bucle; i++) {
    const article = document.createElement('article')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')

    img.src = arrBook[i].cover
    h3.textContent = arrBook[i].title
    article.id = arrBook[i]._id

    article.classList.add('flex-container', 'book')
    divImg.appendChild(img)
    article.appendChild(divImg)
    article.appendChild(h3)
    article.addEventListener('click', () => {
      chargeSection('DetalleLibro', arrBook[i]._id)
    })
    divBooks.appendChild(article)
  }

  page--
  if (page === 1) {
    const btnBefore = document.querySelector('#before')
    btnBefore.disabled = true
  }
  const btnAfter = document.querySelector('#after')
  btnAfter.disabled = false
}

const getAllBooks = () => {
  const div = document.createElement('div')
  div.classList.add('flex-container', 'divBooks')
  fetch('http://localhost:3000/api/v1/books/')
    .then((res) => res.json())
    .then((books) => {
      printBooks(books, div)
    })
  return div
}

const getCategoriesBooks = (id) => {
  if (id !== '') {
    const divBooks = document.querySelector('.divBooks')
    while (divBooks.firstChild) {
      divBooks.removeChild(divBooks.firstChild)
    }
    //section.removeChild(divSection)

    //const div = document.createElement('div')
    //div.classList.add('flex-container')
    fetch('http://localhost:3000/api/v1/categories/' + id)
      .then((res) => res.json())
      .then((categoria) => {
        const h2Section = document.querySelector('.tempBooks>h2')
        h2Section.textContent = 'Libros de ' + categoria.categorie
        if (categoria.books.length !== 0) {
          printBooks(categoria.books, divBooks)
        } else {
          const p = document.createElement('p')
          p.textContent = 'No tenemos libros de esa categoría'
          divBooks.appendChild(p)
        }
      })
    //section.appendChild(divBooks)
  } else {
    chargeSection('Libros')
  }
}

const getABooksByName = (name) => {
  if (name !== '') {
    const div = document.createElement('div')
    div.classList.add('flex-container', 'divBooks')
    fetch('http://localhost:3000/api/v1/books/getByTitle/' + name.toUpperCase())
      .then((res) => res.json())
      .then((books) => {
        if (books.length !== 0) {
          printBooks(books, div)
        } else {
          const p = document.createElement('p')
          p.textContent = 'No encontramos ningun libro con el texto ' + name
          div.appendChild(p)
        }
      })
    return div
  } else {
    chargeSection('Libros')
  }
}

const getCategories = (parentNode, section) => {
  const select = document.createElement('select')
  const opDefault = document.createElement('option')
  opDefault.textContent = 'Todas las categorias'
  opDefault.value = ''
  select.appendChild(opDefault)
  fetch('http://localhost:3000/api/v1/categories/')
    .then((res) => res.json())
    .then((categories) => {
      for (const categorie of categories) {
        const op = document.createElement('option')
        op.textContent = categorie.categorie
        op.value = categorie._id

        select.appendChild(op)
      }
    })
  select.addEventListener('change', (event) => {
    getCategoriesBooks(event.target.value)
  })
  section.appendChild(select)
}
