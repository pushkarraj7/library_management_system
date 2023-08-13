import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Update the path to your main App component

const rootElement = document.getElementById('root');

// Use createRoot instead of render
const root = createRoot(rootElement);
root.render(<App />);
