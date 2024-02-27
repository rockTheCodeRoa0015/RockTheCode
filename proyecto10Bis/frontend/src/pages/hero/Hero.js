import { loginRechargeHeader } from '../../componentes/header/Header'
import { Book } from '../book/Book'
import { BookDetails } from '../bookDetail/BookDetail'
import { Home } from '../home/Home'
import { TemplateLogin, logout, verifyBanned } from '../login/Login'
import { MyProfile } from '../myProfile/MyProfile'
import { Profile } from '../profile/Profile'
import { TemplateRegister } from '../register/Register'
import { TemplateRenewPass } from '../renewPass/RenewPass'
import { Suggestion } from '../suggestion/Suggestion'
import './Hero.css'

export const Hero = (parentNode) => {
  const main = document.createElement('main')
  main.id = 'main'
  main.classList.add('flex-container')
  parentNode.appendChild(main)
  if (localStorage.getItem('user')) {
    verifyBanned()
    if (localStorage.getItem('isbanned') === 'false') {
      Book(main, 'All')
    } else {
      chargeSection('Logout')
    }
  } else {
    Home(main)
  }
}

export const chargeSection = (page, param) => {
  const main = document.querySelector('#main')
  const app = document.querySelector('#app')
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }

  if (localStorage.getItem('user')) {
    verifyBanned()
    if (localStorage.getItem('isbanned') === 'true') {
      page = 'Logout'
    }
  }

  if (
    document.querySelector('.profile-show') &&
    page !== 'Perfil' &&
    page !== 'Logout'
  ) {
    const div = document.querySelector('.profile')
    div.classList.toggle('profile-show')
  }

  switch (page) {
    case 'Home':
      if (document.querySelector('.nav-show')) {
        document.querySelector('.logo>img').click()
      }
      Home(main)
      break
    case 'Login':
      TemplateLogin(main)
      break
    case 'Logeado':
      loginRechargeHeader()
      Book(main, 'All')
      break
    case 'Logout':
      logout()
      loginRechargeHeader()
      Home(main)
      break
    case 'Regitro':
      TemplateRegister(main)
      break
    case 'Renovar':
      TemplateRenewPass(main)
      break
    case 'Libros':
      if (document.querySelector('.nav-show')) {
        document.querySelector('.logo>img').click()
      }
      Book(main, 'All')
      break
    case 'NombreLibro':
      Book(main, 'Name', param)
      break
    case 'DetalleLibro':
      BookDetails(main, param)
      break
    case 'Perfil':
      document.querySelector('.menu>img').click()
      MyProfile(main)
      break
    case 'OtroPerfil':
      Profile(main, param)
      break
    case 'Sugerencias':
      if (document.querySelector('.nav-show')) {
        document.querySelector('.logo>img').click()
      }
      Suggestion(main)
      break
    default:
      Home(main)
      break
  }
}
