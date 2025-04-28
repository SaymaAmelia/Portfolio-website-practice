import React from 'react'
import NavPage from './pages/NavPage'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { ReactLenis, useLenis } from 'lenis/react'


const App = () => {
  return (
    <ReactLenis root>
      <NavPage/>
       <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
       <Review/> 
       <Contact/>
       </main>
       <Footer/>
       </ReactLenis>
  )
}

export default App