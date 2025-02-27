// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css'; 
import { ThemeProvider } from './Themecontext'; // Import the ThemeProvider


const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot

// Render the application
root.render(
    <Provider store={store}>
      <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>
);