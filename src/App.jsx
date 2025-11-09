import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}


export default App