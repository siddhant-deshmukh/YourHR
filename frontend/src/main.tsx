import './index.css'
import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/authContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
)
