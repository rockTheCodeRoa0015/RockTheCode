import './App.css'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form/Form'
import Register from './pages/Register/Register'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Form />}></Route>
        <Route path='/register/:userName' element={<Register />}></Route>
      </Routes>
    </div>
  )
}

export default App
