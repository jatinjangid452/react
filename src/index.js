import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Footer} from './components/Header';
// import Header from './components/Header';
import reportWebVitals from './reportWebVitals';

// import Counter from './components/Counter';
// import TestComponent from './Test';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
   {/* <Header/> */}
     {/* <Counter/> */}
  </React.StrictMode>
);
reportWebVitals();
