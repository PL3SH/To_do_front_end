import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
createTasks(document.getElementById('task')).render(
  <StrictMode>
  <App />
</StrictMode>,

)
