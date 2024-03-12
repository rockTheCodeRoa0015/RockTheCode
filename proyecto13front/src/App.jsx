import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import Books from './pages/Books/Books'
import Basket from './pages/Basket/Basket'
import HeaderMobile from './components/HeaderMobile/HeaderMobile'
import BookDetail from './pages/BookDetail/BookDetail'

export const numCartContext = createContext()

const App = () => {
  const [numCart, setNumCart] = useState(0)
  return (
    <>
      <numCartContext.Provider value={numCart}>
        <Header />
        <HeaderMobile />
        <Routes>
          <Route
            path='/'
            element={<Home numCart={numCart} setNumCart={setNumCart} />}
          ></Route>
          <Route path='/books/:id' element={<Books />}></Route>
          <Route
            path='/bookDetail/:id'
            element={<BookDetail numCart={numCart} setNumCart={setNumCart} />}
          ></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
          <Route path='/*' element={<Home />}></Route>
        </Routes>
      </numCartContext.Provider>
    </>
  )
}

export default App
