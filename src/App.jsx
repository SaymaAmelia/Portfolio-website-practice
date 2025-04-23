import React from 'react'
import NavPage from './pages/NavPage'
import Hero from './components/Hero'
import About from './components/About'


const App = () => {
  return (
    <>
      <NavPage/>
       <main>
        <Hero/>
        <About/>
       </main>
    </>
  )
}

export default App