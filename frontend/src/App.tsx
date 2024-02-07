import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './navbar/Navbar'
import { decrement, increment } from './redux/AppSlice'

function App() {
  return (
    <>
    <div>
      <Navbar/>

      <div>

      </div>
     
    </div>
      
    </>
  )
}

export default App
