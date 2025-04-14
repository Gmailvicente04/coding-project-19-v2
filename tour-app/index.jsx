import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';

// Create a root container from the HTML element with id 'root'
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside React.StrictMode (helps with highlighting potential issues)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
