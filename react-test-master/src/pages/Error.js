import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../components/AnimatedLetters'

function Error() {

  const [letterClass] = useState('text-animate')
  return (
  <>
    <div className="container error-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'r', 'r', 'o', 'r', ' ', '4', '0', '4']}
              idx={15}
            />
          </h1>
        
            <Link to='/' className='flat-button'>Back Home</Link>
            <Loader type="pacman" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
   
  )
}

export default Error