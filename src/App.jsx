import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header'
import { Hero } from './Hero'
import { Footer } from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex flex-col bg-black '
    >
      <Header/>
      <Hero/>
      <Footer/>
     </div>
    </>
  )
}

export default App
