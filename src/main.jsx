import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './contextApi/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<CartContext>
     <BrowserRouter> <App /></BrowserRouter>
  
</CartContext>  </React.StrictMode>,
)
