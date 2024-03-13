import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import Books from './pages/Books/Books'
import Basket from './pages/Basket/Basket'
import HeaderMobile from './components/HeaderMobile/HeaderMobile'
import BookDetail from './pages/BookDetail/BookDetail'
import Login from './pages/Login/Login'
import LoginProvider from './provider/LoginProvider'
import NumCartProvider from './provider/NumCartProvider'

const App = () => {
  return (
    <>
      <LoginProvider>
        <NumCartProvider>
          <Header />
          <HeaderMobile />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/books/:id' element={<Books />}></Route>
            <Route path='/bookDetail/:id' element={<BookDetail />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/basket' element={<Basket />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/*' element={<Home />}></Route>
          </Routes>
        </NumCartProvider>
      </LoginProvider>
    </>
  )
}

export default App
