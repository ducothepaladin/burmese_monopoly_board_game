import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CentralStoreProvider from './contexts/CentralStoreProvider.jsx'

createRoot(document.getElementById('root')).render(
  <CentralStoreProvider>
    <StrictMode>
    <App />
  </StrictMode>
  </CentralStoreProvider>,
)
