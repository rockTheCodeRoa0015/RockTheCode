import './App.css'
import React from 'react'
import ShowCount from './components/ShowCount'

function App() {
  const [value, setValue] = React.useState(0)

  function restar() {
    setValue(value - 1)
  }

  function sumar() {
    setValue(value + 1)
  }
  return (
    <>
      <div className='app'>
        <ShowCount num={value} />
        <div className='buttons'>
          <button className='restar' onClick={() => restar()}>
            Restar
          </button>
          <button className='sumar' onClick={() => sumar()}>
            Sumar
          </button>
        </div>
      </div>
    </>
  )
}

export default App
