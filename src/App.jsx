import React from 'react'
import NavPage from './pages/NavPage'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'


const App = () => {
  return (
    <>
      <NavPage/>
       <main>
        <Hero/>
        <About/>
        <Skill/>
       </main>
    </>
  )
}

export default App