import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { LoginFlagProvider } from './components/providers/LoginFlagProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginFlagProvider>
        <App />
      </LoginFlagProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
