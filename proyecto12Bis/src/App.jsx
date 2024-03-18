import { Route, Routes } from 'react-router-dom'
import './App.css'
import Films from './pages/Films/Films'
import Favourites from './pages/Favourites/Favourites'
import RouteNotFound from './pages/RouteNotFound/RouteNotFound'
import Suggestions from './pages/Suggestions/Suggestions'
import Header from './components/Header/Header'
import DetailsFilm from './pages/DetailsFilm/DetailsFilm'
import Footer from './components/Footer/Footer'
import FilmProvider from './provider/FilmProvider'

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <FilmProvider>
        <Routes>
          <Route path='/' element={<Films />}></Route>
          <Route path='/fav' element={<Favourites />}></Route>
          <Route path='/sug' element={<Suggestions />}></Route>
          <Route path='/details/:id' element={<DetailsFilm />}></Route>
          <Route path='/*' element={<RouteNotFound />}></Route>
        </Routes>
      </FilmProvider>
      <Footer></Footer>
    </div>
  )
}

export default App
