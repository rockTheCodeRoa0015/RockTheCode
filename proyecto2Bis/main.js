import './style.css'
import { products as productos } from './products'

const CONSOLES = []
let CONSOLA = ''
let PRECIO = ''

const filtrar = () => {
  const filtered = []
  let nameConsola = 'Juegos ' + CONSOLA
  if (
    CONSOLA !== 'Todas las consolas' &&
    CONSOLA !== '' &&
    PRECIO !== null &&
    PRECIO !== ''
  ) {
    for (const producto of productos) {
      if (CONSOLA.includes(producto.console) && producto.price <= PRECIO) {
        filtered.push(producto)
      }
    }

    printProducts(filtered, nameConsola)
  } else if (
    CONSOLA !== 'Todas las consolas' &&
    CONSOLA !== '' &&
    (PRECIO === null || PRECIO === '')
  ) {
    for (const producto of productos) {
      if (CONSOLA.includes(producto.console)) {
        filtered.push(producto)
      }
    }

    printProducts(filtered, nameConsola)
  } else if (
    (CONSOLA === 'Todas las consolas' || CONSOLA === '') &&
    PRECIO !== null &&
    PRECIO !== ''
  ) {
    for (const producto of productos) {
      if (producto.price <= PRECIO) {
        filtered.push(producto)
      }
    }

    printProducts(filtered)
  } else {
    printProducts(productos)
  }
}

const printProducts = (productos, title = 'Juegos') => {
  const sectionProducts = document.querySelector('.products')
  sectionProducts.innerHTML = ''
  const h2Prodcuts = document.createElement('h2')
  const divProdcuts = document.createElement('div')
  if (productos.length > 0) {
    for (const producto of productos) {
      const articleProducts = document.createElement('article')
      const imgProducts = document.createElement('img')
      const h3Products = document.createElement('h3')
      const pProducts = document.createElement('p')
      const divDetalles = document.createElement('div')
      const h4Detalles = document.createElement('h4')
      const pDetalles = document.createElement('p')
      const divEstrellas = document.createElement('div')

      for (let i = 1; i <= 5; i++) {
        const estrella = document.createElement('div')
        estrella.className = 'estrella'
        if (i <= producto.stars) {
          estrella.classList.add('rellena')
        }
        divEstrellas.appendChild(estrella)
      }
      imgProducts.src = producto.image
      h3Products.textContent = producto.name
      pProducts.textContent = producto.console
      h4Detalles.textContent = producto.price + ' €'
      pDetalles.textContent = 'Reviews: ' + producto.reviews
      divDetalles.appendChild(h4Detalles)
      divDetalles.appendChild(pDetalles)
      articleProducts.appendChild(imgProducts)
      articleProducts.appendChild(h3Products)
      articleProducts.appendChild(pProducts)
      articleProducts.appendChild(divDetalles)
      articleProducts.appendChild(divEstrellas)
      divProdcuts.appendChild(articleProducts)

      articleProducts.classList.add('flex-container', 'game')
      divDetalles.classList.add('flex-container', 'details')
      divEstrellas.classList.add('estrellas', 'flex-container')
    }
    h2Prodcuts.textContent = title
    sectionProducts.appendChild(h2Prodcuts)
    sectionProducts.appendChild(divProdcuts)
    divProdcuts.classList.add('flex-container', 'infoGames')
  } else {
    const pProducts = document.createElement('p')
    pProducts.textContent = '0 productos encontrados'
    h2Prodcuts.textContent = title
    divProdcuts.appendChild(pProducts)
    sectionProducts.appendChild(h2Prodcuts)
    sectionProducts.appendChild(divProdcuts)
  }
}

const fillConsole = (productos) => {
  CONSOLES.splice(0)
  CONSOLES.push('Todas las consolas')
  for (const producto of productos) {
    if (!CONSOLES.includes(producto.console)) {
      CONSOLES.push(producto.console)
    }
  }
}

fillConsole(productos)

const printFilters = () => {
  const sectionProducts = document.querySelector('.filter')
  const selectModel = document.createElement('select')
  const inputPrice = document.createElement('input')
  const labelPrice = document.createElement('label')
  const btnPrice = document.createElement('button')
  const btnClear = document.createElement('button')
  const divFilters = document.createElement('div')
  const divBtn = document.createElement('div')
  const divLabel = document.createElement('div')

  for (const console of CONSOLES) {
    const option = document.createElement('option')

    option.value = console
    option.textContent = console

    selectModel.appendChild(option)
  }

  selectModel.id = 'selector'
  labelPrice.textContent = 'Precio:'
  btnPrice.textContent = 'Buscar'
  inputPrice.type = 'number'
  inputPrice.id = 'inPrice'
  btnClear.textContent = 'Limpiar'

  divLabel.appendChild(labelPrice)
  divFilters.appendChild(selectModel)
  divFilters.appendChild(divLabel)
  divFilters.appendChild(inputPrice)
  divBtn.appendChild(btnPrice)
  divBtn.appendChild(btnClear)

  sectionProducts.appendChild(divFilters)
  sectionProducts.appendChild(divBtn)

  sectionProducts.classList.add('flex-container')
  divBtn.classList.add('buttons', 'flex-container')
  divFilters.classList.add('filters', 'flex-container')
  divLabel.classList.add('labels')

  selectModel.addEventListener('change', (event) => {
    CONSOLA = event.target.value
    filtrar()
  })

  btnPrice.addEventListener('click', () => {
    PRECIO = ''
    if (document.querySelector('#inPrice').value !== '') {
      PRECIO = parseInt(document.querySelector('#inPrice').value)
    }
    filtrar()
  })

  btnClear.addEventListener('click', () => {
    PRECIO = ''
    CONSOLA = ''
    document.querySelector('#inPrice').value = ''
    document.querySelector('#selector').value = 'Todas las consolas'
    filtrar()
  })
}

printFilters()
printProducts(productos)
