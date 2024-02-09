import './App.css'
import React, { useEffect, useState } from 'react'
import Character from './components/Character/Character'

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results)
      })
  }, [])

  return (
    <div className='app'>
      <h1>Lista de Personajes</h1>
      <div className='characters'>
        {characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
