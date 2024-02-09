import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact/:id' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
