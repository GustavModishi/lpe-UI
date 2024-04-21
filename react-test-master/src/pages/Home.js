import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../components/AnimatedLetters'
import LogoG from '../assets/images/logoG.png'
import LogoM from '../assets/images/logoM.png'

function Home() {
  const [letterClass] = useState('text-animate')
  const fnameArray = ['u', 's', 't', 'a', 'v', ' ']
  const snameArray = ['o', 'd', 'i', 's', 'h', 'i'  ]
  const jobArray = ['S', 'o', 'f', 't', 'w','a','r','e',' ', 'D','e', 'v','e', 'l','o','p','e','r','.']




  return (
    <>
      <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12` }>e</span>
              <span className={`${letterClass} _13` }>l</span>
              <span className={`${letterClass} _14` }>l</span>
              <span className={`${letterClass} _15` }>o</span>
              <span className={`${letterClass} _16` }>!</span>
              <br /> 
            
              <span className={`${letterClass} _17` }>I</span>
              <span className={`${letterClass} _18` }>'m</span>
              <span className={`${letterClass} _19` }> </span>
              
              
            <span className='names'>
             
              <img className='imgG'src={LogoG} alt='LOGO'/> 
              
              <AnimatedLetters letterClass={letterClass}
              strArray={fnameArray}
              idx={20} />

              </span>
              <span className='names'>
              <img className='imgM'src={LogoM} alt='LOGO'/>
              <AnimatedLetters letterClass={letterClass}
              strArray={snameArray}
              idx={27} />

              </span>
           
              
              <br/>
              <AnimatedLetters letterClass={letterClass}
              strArray={jobArray}
              idx={34} />
            
            </h1>
            <h2>System Developer / System Analyst</h2>
            <Link to='/contact' className='flat-button'>Contact Me</Link>
          </div>
      </div>
    </>
  )
}

export default Home