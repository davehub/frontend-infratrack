import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { TicketsProvider } from './context/TicketsContext';
import './styles/globals.css';
import './styles/animations.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TicketsProvider>
        <App />
      </TicketsProvider>
    </AuthProvider>
  </React.StrictMode>
);