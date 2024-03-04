import { loginRechargeHeader } from '../componentes/header/Header'
import { Book } from '../pages/book/Book'
import { Home } from '../pages/home/Home'
import { TemplateLogin, logout, verifyBanned } from '../pages/login/Login'
import { BookDetails } from '../pages/bookDetail/BookDetail'
import { MyProfile } from '../pages/myProfile/MyProfile'
import { Profile } from '../pages/profile/Profile'
import { TemplateRegister } from '../pages/register/Register'
import { TemplateRenewPass } from '../pages/renewPass/RenewPass'
import { Suggestion } from '../pages/suggestion/Suggestion'

export const chargeSection = (page, param) => {
  const main = document.querySelector('#main')
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
      if (document.querySelector('.profile-show')) {
        document.querySelector('.menu>img').click()
      }
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
