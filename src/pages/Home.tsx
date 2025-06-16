import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Calculator from '../components/Calculator'
import About from '../components/About'
import Contacts from '../components/Contacts'

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <About />
      <Calculator />
      <Contacts />
    </main>
  )
}

export default Home
