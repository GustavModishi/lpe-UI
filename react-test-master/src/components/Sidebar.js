
import { useState } from 'react'

import LogoG from '../assets/images/logoG.png'
import LogoSubtitle from '../assets/images/logo-sub.png'
import {  FaTwitter, FaGithub, FaLinkedin, FaRegCopyright,
  FaHome,   FaSuitcase, FaBars
} from 'react-icons/fa';

import { VscClose } from "react-icons/vsc";


import { Link, NavLink } from 'react-router-dom'


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoG} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
      <div className="nav-mob">
      <NavLink 
          exact="true"
          className={({isActive}) => isActive? 'active' : ''}
          to="/"
          onClick={() => setShowNav(false)}>
           <FaHome   />
      </NavLink>
    
      <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          < FaSuitcase  />
      </NavLink>
     
     
      </div>
       
        
       
        <VscClose
          onClick={() => setShowNav(false)}
          color="#ffd700"
        
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/gustav-modishi"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
             
              onMouseOver={({target})=>target.style.color="#ffd700"}
              onMouseOut={({target})=>target.style.color="#4d4d4e"}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/GustavModishi"
            target="_blank"
            rel="noreferrer"
           
            
          >
            <FaGithub
               onMouseOver={({target})=>target.style.color="#ffd700"}
               onMouseOut={({target})=>target.style.color="#4d4d4e"}
             
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Gustav_Modishi"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter
            onMouseOver={({target})=>target.style.color="#ffd700"}
            onMouseOut={({target})=>target.style.color="#4d4d4e"}
              
              className="anchor-icon"
            />
          </a>
        </li>
        
        
        
       
      
      
      </ul>
      <div class="copyright">
            
            <FaRegCopyright className="anchor-icon" />2023 Gustav Modishi
      </div>
      
      <FaBars 
          onClick={() => setShowNav(true)}
          color="#ffd700"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
