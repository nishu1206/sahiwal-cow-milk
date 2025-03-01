import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Website from './website/Website'; 
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
