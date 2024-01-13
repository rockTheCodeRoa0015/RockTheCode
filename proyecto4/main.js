import './style.css'
import { Header } from './src/components/Header/Header'
import { Footer } from './src/components/Footer/Footer'
import { Main } from './src/components/Hero/Hero'
import data from './data/data'

const app = document.querySelector('#app')
Header(app, data)
Main(app)
Footer(app)
