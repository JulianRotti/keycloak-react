import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';  // Main App component

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />
);
