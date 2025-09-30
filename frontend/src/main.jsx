import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductContextProvider from './context/ProductContext.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <BrowserRouter>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </BrowserRouter>
  </ProductContextProvider>
    
)
