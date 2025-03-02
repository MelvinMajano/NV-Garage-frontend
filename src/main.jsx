import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar.jsx';
import RouterApp from './router/RouterApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <RouterApp />
    </BrowserRouter>
  </StrictMode>,
);
