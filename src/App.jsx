import { useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './sections/Intro'

function App() {

  return (
    <div className='max-w-screen lg:px-[60px]'>
      <Navbar />
      <Intro />
    </div>
  )
}

export default App
