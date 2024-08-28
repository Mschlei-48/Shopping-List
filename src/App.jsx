import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShopList from './ShopList.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'


function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="home" element={<ShopList/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
