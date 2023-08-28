import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/public/service-worker.js') 
    .then(registration => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(error => {
      console.log('Falha ao registrar o Service Worker:', error);
    });
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

