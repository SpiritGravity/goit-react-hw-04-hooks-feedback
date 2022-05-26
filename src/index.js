import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App';
import './index.css';
import reportWebVitals from './reportWebVitals.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
 </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

reportWebVitals();
