import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Addprod from './components/Addprod'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/home' element={<Homepage/>}></Route>
      <Route path='/add' element={<Addprod/>}></Route>
      </Routes>
     
    </>
  )
}

export default App
