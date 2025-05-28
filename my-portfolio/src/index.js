import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import emailjs from 'emailjs-com';

// EmailJS setup
emailjs.init('BeKhR1Ja5YMBnyL9I');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance tracking
reportWebVitals();
