import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './NvHome/Pages/HomePage.jsx'
import { Navbar } from './Navbar/Navbar.jsx'
import { RouterApp } from './router/RoterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <RouterApp/>
    </BrowserRouter>
  </StrictMode>,
)
