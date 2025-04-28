import React from 'react'

import Navbar from '../components/Navbar';
import { useState } from 'react';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  

  return (
    <header className='fixed top-0 left-0 right-0 shadow-md p-4 flex justify-between items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className='max-w-screen-2xl w-full mx-auto  px-4  md:px-6 flex justify-between items-center ' >
        <h1>
          <a href="/"
          className='logo'
          >
            <img src="/images/logo.svg"
            width={40}
            height={40}
            alt="Henry Crack" />
          </a>
        </h1>
     

      <div className='relative md:justify-self-center flex items-center justify-center md:justify-between'>
      
        <button className='menu-btn ' 
            onClick={()=>setNavOpen((prev)=>!prev)}
            >
         <span className='material-symbols-rounded'>
         {navOpen ? 'close' : 'menu'}
          </span>
        </button>
       
        <Navbar navOpen={navOpen   } />  
      </div>

      <div className='hidden md:block'>
      <a href="#contact"
           className='btn btn-secondary hidden invisible opacity-0 h-0 w-0 md:visible md:opacity-100 md:h-auto md:w-auto'>
           
        contact me
       </a>
      </div>
      </div>
       
    </header>
  )
}

export default Header