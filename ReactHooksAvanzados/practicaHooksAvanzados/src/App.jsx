import './App.css'
import Calculator from './components/Calculator/Calculator'
import Timer from './components/Timer/Timer'
import useDate from './customHooks/useDate/useDate'

function App() {
  const { fecha } = useDate()

  return (
    <div className='app'>
      <Timer fecha={fecha} />
      <Calculator />
    </div>
  )
}

export default App
