import './Character.css'
import React, { useState } from 'react'

const Character = ({ image, name }) => {
  const [rotate, setRotate] = useState(0)

  return (
    <div className='character'>
      <img
        src={image}
        onClick={() => (rotate === 0 ? setRotate(180) : setRotate(0))}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
      <p>{name}</p>
    </div>
  )
}

export default Character
