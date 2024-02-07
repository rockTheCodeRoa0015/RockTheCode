import './style.css'
import { Footer } from './src/componentes/footer/Footer'
import {
  Header,
  HeaderMovile,
  popUpProfile
} from './src/componentes/header/Header'
import { Hero } from './src/pages/hero/Hero'

const app = document.querySelector('#app')
Header(app)
HeaderMovile(app)
popUpProfile(app)
Hero(app)
Footer(app)
