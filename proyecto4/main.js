import './style.css'
import { Header } from './src/components/header/header'
import { Footer } from './src/components/footer/footer'
import { Main } from './src/components/Hero/Hero'
import data from './data/data'

const app = document.querySelector('#app')
Header(app, data)
Main(app)
Footer(app)
