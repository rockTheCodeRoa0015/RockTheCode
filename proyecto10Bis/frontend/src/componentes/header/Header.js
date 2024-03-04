import { chargeSection } from '../../utils/router'
import { Ul } from '../Ul/Ul'
import './Header.css'

export const Header = (parentNode) => {
  templateHeader(false, parentNode)
}

export const HeaderMovile = (parentNode) => {
  templateHeader(true, parentNode)
}

const templateHeader = (movile, parentNode) => {
  const header = document.createElement('header')
  const divMenu = document.createElement('div')
  const divHeaderInfo = document.createElement('div')
  const divLogo = document.createElement('div')
  const divSearch = document.createElement('div')
  const divNav = document.createElement('div')
  const h1 = document.createElement('h1')
  const search = document.createElement('input')
  const imgSearch = document.createElement('img')
  const btnLogIn = document.createElement('button')
  const imgProfile = document.createElement('img')
  const imgMenu = document.createElement('img')
  if (movile) {
    imgMenu.src = './img/menu2.png'
    imgMenu.addEventListener('click', () => {
      divNav.classList.toggle('nav-show')
    })
    btnLogIn.id = 'btnloginMovile'
    header.classList.add('flex-container', 'headerMovil')
  } else {
    btnLogIn.id = 'btnloginWeb'
    header.classList.add('flex-container', 'header')
  }

  h1.textContent = 'Bookpinions'
  search.placeholder = 'Libros'
  search.addEventListener('keyup', (e) => {
    if (search.value !== '') {
      if (e.key === 'Enter' || e.keyCode === 13) {
        chargeSection('NombreLibro', search.value)
        search.value = ''
      }
    }
  })
  imgSearch.src = './img/lupa.png'
  imgSearch.addEventListener('click', () => {
    chargeSection('NombreLibro', search.value)
    search.value = ''
  })
  btnLogIn.textContent = 'Login'
  btnLogIn.addEventListener('click', () => {
    chargeSection('Login')
  })
  imgProfile.src = localStorage.getItem('avatar')
  imgProfile.addEventListener('click', () => {
    const div = document.querySelector('.profile')
    div.classList.toggle('profile-show')
  })

  divHeaderInfo.classList.add('flex-container', 'headerInfo')
  divSearch.classList.add('flex-container', 'search')
  divLogo.classList.add('flex-container', 'logo')
  divNav.classList.add('flex-container', 'nav')
  divMenu.classList.add('flex-container', 'menu')

  divMenu.appendChild(imgProfile)
  divMenu.appendChild(btnLogIn)
  if (localStorage.getItem('user')) {
    const pag = ['Home', 'Libros', 'Sugerencias']
    Ul(divNav, pag, 'paginas', 'listNav')
    btnLogIn.style.display = 'none'
  } else {
    const pag = ['Home', 'Libros']
    Ul(divNav, pag, 'paginas', 'listNav')
    imgProfile.style.display = 'none'
  }

  if (movile) {
    divLogo.appendChild(imgMenu)
    divLogo.appendChild(h1)
    divSearch.appendChild(search)
    divSearch.appendChild(imgSearch)
    divHeaderInfo.appendChild(divLogo)
    divHeaderInfo.appendChild(divMenu)
    header.appendChild(divHeaderInfo)
    header.appendChild(divSearch)
    header.appendChild(divNav)
    parentNode.appendChild(header)
  } else {
    divLogo.appendChild(h1)
    divSearch.appendChild(search)
    divSearch.appendChild(imgSearch)
    divHeaderInfo.appendChild(divLogo)
    divHeaderInfo.appendChild(divSearch)
    divHeaderInfo.appendChild(divMenu)
    header.appendChild(divHeaderInfo)
    header.appendChild(divNav)
    parentNode.appendChild(header)
  }
}

export const popUpProfile = (parentNode) => {
  const div = document.createElement('div')
  div.classList.add('flex-container', 'profile')
  const arrProfile = ['Perfil', 'Logout']
  Ul(div, arrProfile, 'listProfile')
  parentNode.appendChild(div)
}

export const loginRechargeHeader = () => {
  const btnLogInWeb = document.querySelector('#btnloginWeb')
  const imgProfile = document.querySelector('.menu>img')
  const btnLogInMovile = document.querySelector('#btnloginMovile')
  const divNavHeader = document.querySelector('.header>.nav')
  const divNavHeaderMovile = document.querySelector('.headerMovil>.nav')
  divNavHeader.removeChild(divNavHeader.firstChild)
  divNavHeaderMovile.removeChild(divNavHeaderMovile.firstChild)
  if (localStorage.getItem('user')) {
    btnLogInWeb.style.display = 'none'
    imgProfile.style.display = 'block'
    imgProfile.src = localStorage.getItem('avatar')
    btnLogInMovile.style.display = 'none'
    const pag = ['Home', 'Libros', 'Sugerencias']
    Ul(divNavHeader, pag, 'paginas', 'listNav')
    Ul(divNavHeaderMovile, pag, 'paginas', 'listNav')
  } else {
    btnLogInWeb.style.display = 'block'
    imgProfile.style.display = 'none'
    btnLogInMovile.style.display = 'block'
    const pag = ['Home', 'Libros']
    Ul(divNavHeader, pag, 'paginas', 'listNav')
    Ul(divNavHeaderMovile, pag, 'paginas', 'listNav')
  }
}
