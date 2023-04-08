import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from "./weather.js"
import Nav from "./nav.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
    <Nav />
   <Weather/>
   </div>
  
);


