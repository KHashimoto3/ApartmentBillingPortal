import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from'react-router-dom';
import { LoginFlagProvider } from './components/providers/LoginFlagProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginFlagProvider>
        <App />
      </LoginFlagProvider>
    </BrowserRouter>
  </React.StrictMode>
);

