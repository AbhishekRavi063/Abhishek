import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

import './App.css'
import Skills from './components/skills/Skills'
import Hover from './components/hover/Hover'
import Works from './components/works/Works'
import Scrolll from './components/hover/Scrolll'



function App() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className='app'>
      <Hero/>
      <About/>
      <Skills/>
      {!isMobile && <Hover />}
      <Works/>
      <Scrolll/>
      
    </div>
  )
}

export default App

