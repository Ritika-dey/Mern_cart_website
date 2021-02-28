import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';  
import ReactRoutes from './components/ReactRoutes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReactRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
 