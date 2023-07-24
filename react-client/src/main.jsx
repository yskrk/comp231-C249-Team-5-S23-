import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
// for react-bootstrap
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
