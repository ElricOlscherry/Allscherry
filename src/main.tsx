import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Footer from './components/footer/Footer.tsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>,
)
