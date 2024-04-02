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
import ToggleMenuProvider from './provider/ToggleMenuProvider'
import Register from './pages/Register/Register'
import RenewPass from './pages/RenewPass/RenewPass'
import ToggleProfileProvider from './provider/ToggleProfileProvider'
import DelItemProvider from './provider/DelItemProvider'
import Purchase from './pages/Purchase/Purchase'
import SearchBook from './pages/SearchBook/SearchBook'
import Sales from './pages/Sales/Sales'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <LoginProvider>
        <NumCartProvider>
          <ToggleMenuProvider>
            <ToggleProfileProvider>
              <Header />
              <HeaderMobile />
            </ToggleProfileProvider>
          </ToggleMenuProvider>
          <DelItemProvider>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/books/:id' element={<Books />}></Route>
              <Route path='/bookDetail/:id' element={<BookDetail />}></Route>
              <Route path='/search/:search' element={<SearchBook />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/sales' element={<Sales />}></Route>
              <Route path='/basket' element={<Basket />}></Route>
              <Route path='/purchase' element={<Purchase />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/renewPass' element={<RenewPass />}></Route>
              <Route path='/*' element={<Home />}></Route>
            </Routes>
          </DelItemProvider>
          <Footer></Footer>
        </NumCartProvider>
      </LoginProvider>
    </>
  )
}

export default App
