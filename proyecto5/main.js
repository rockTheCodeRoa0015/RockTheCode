import './style.css'
import { Header } from './src/componentes/Header/Header'
import { Footer } from './src/componentes/Footer/Footer'
import { hero } from './src/pages/hero/hero'

const app = document.querySelector('#app')
Header(app)
hero(app)
Footer(app)
