import React from 'react'
// import LogoS from '../assets/images/logo.png'
// import LogoSubtitle from '../assets/images/logo-sub.png'
import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';



function Header() {
  const location = useLocation(); 
  const [url, setUrl] = useState('/');
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  let len = url.length;

  return (
    <div className='header-top'>
      
      {url === '/' && <div className='loc'>HOME</div>}
      {url !== '/' && <div className='loc'>{url.toUpperCase().slice(1, len)}</div>}

       
    </div> 
  )
}

export default Header