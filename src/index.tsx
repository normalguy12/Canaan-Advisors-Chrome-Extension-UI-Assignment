import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.createElement("root")
root.className = "container"
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <>
      <App />  
  </>
);