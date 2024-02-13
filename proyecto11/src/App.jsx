import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Top from './pages/Top/Top'
import RouteNotFound from './pages/RouteNotFound/RouteNotFound'
import Footer from './components/Footer/Footer'
import './App.css'
import Animes from './pages/Animes/Animes'
import AnimeDetail from './pages/AnimeDetail/AnimeDetail'
import AnimesSearch from './pages/AnimesSearch/AnimesSearch'

const App = () => {
  return (
    <div className='flex-container app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/animes' element={<Animes />}></Route>
        <Route path='/anime/:id' element={<AnimeDetail />}></Route>
        <Route path='/top' element={<Top />}></Route>
        <Route path='/search/:search' element={<AnimesSearch />}></Route>
        <Route path='/*' element={<RouteNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
