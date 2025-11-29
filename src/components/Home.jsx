import React from 'react'
import Work from './Work';
import Landing from './Landing'
import Skills from './Skills';
import About from './About';
import Contact from '../pages/Contact'

const Home = () => {
  return (
    <div>
      <Landing />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default Home
