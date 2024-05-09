import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles for your app
import App from './App'; // Adjust the import path according to your project structure
import reportWebVitals from './reportWebVitals'; // If you're using Create React App, this may already be here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you're not using reportWebVitals, you can safely remove it
reportWebVitals();
