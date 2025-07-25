import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UserContext from './conetxt/UserContext.jsx'
import CaptainContext from './conetxt/CaptainContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <CaptainContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainContext>
    </UserContext>
  </StrictMode>,
)
