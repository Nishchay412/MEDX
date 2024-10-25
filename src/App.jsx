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
     style={{ 
      background: `
        linear-gradient(135deg, rgba(18, 18, 18, 0.8), rgba(44, 44, 44, 0.8)),
        linear-gradient(to bottom, #121212, #2c2c2c)`,
      margin: 0, // Ensure no margin is applied
      padding: 0, // Ensure no padding is applied
      border: 0 // Ensure no border is applied
    }}>
      <Header/>
      <Hero/>
      <Footer/>
     </div>
    </>
  )
}

export default App
