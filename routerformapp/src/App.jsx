import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/MainLayout'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'

function App() {
  const [logData, setlogData]=useState()
  return (
    <>
      {/* <h2>Welcome to React Routing</h2> */}

      <BrowserRouter>
      <Routes>
    <Route path='/' element={<MainLayout />}></Route>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Registration regData={setlogData}/>} />
    <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
     

      </BrowserRouter>
    </>
  )
}

export default App