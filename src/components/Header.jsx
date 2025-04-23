import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Navbar from '../components/Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  

  return (
    <header className='fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className='max-w-screen-2xl w-full mx-auto  px-4 flex justify-between items-center     md:px-6 '
      //  md:grid md:grid-cols-[1fr,3fr,1fr]  md:gap-4 (this part for this div but it is not working)
      >
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
     

      <div className='relative md:justify-self-center'>
      
        <button className="w-10 h-10 grid place-items-center rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform,shadow] duration-300 active:scale-95 active:shadow-[0_0_0_1px] active:shadow-zinc-50/10 md:hidden"
            onClick={()=>setNavOpen((prev)=>!prev)}
            >
         <span className='w-[1em] h-[1em] overflow-hidden font-variation-settings:"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24 '>
         {navOpen ? <IoMdClose /> : <IoMenu />}
          
          </span>
        </button>
       
        <Navbar isMenuOpen={navOpen}/>  
      </div>
       <a href="#contact"
       className='btn btn-secondary h-9 flex items-center gap-2 px-4 max-md:hidden  rounded-xl font-mediumtext-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] '>
        contact me
       </a>
      </div>
       
    </header>
  )
}

export default Header