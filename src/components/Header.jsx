import React from 'react'

import Navbar from '../components/Navbar';
import { useState } from 'react';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  

  return (
    <header className='fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className='max-w-screen-2xl w-full mx-auto  px-4  md:px-6 flex justify-between items-center md:grid md:grid-cols-[1fr,3fr,1fr] md:gap-4' >
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
     

      <div className='relative md:justify-self-center flex items-center justify-center'>
      
        <button className='menu-btn ' 
            onClick={()=>setNavOpen((prev)=>!prev)}
            >
         <span className='material-symbols-rounded'>
         {navOpen ? 'close' : 'menu'}
          </span>
        </button>
       
        <Navbar navOpen={navOpen   } />  
      </div>

       {/* <a href="#contact"
           className='btn btn-secondary  lg:block btn btn-secondary max-md:hidden md:justify-self-end'>
        contact me
       </a> */}
      </div>
       
    </header>
  )
}

export default Header