import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css';  // Ensure you have Bootstrap icons imported
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
