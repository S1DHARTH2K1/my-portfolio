import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
// Replace 'user_yourUserID' with your actual EmailJS User ID
emailjs.init('user_yourUserID');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring for the portfolio website
reportWebVitals();
