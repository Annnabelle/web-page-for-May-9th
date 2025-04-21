import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Hero from './components/hero'
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Hero/>
    </BrowserRouter>
  )
}

export default App
