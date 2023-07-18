import './App.css';
import Weather from "./weather.js"
import Nav from "./nav.js"
import React from 'react';
function App() {
  const [lightmode,setLightmode]=React.useState(false)
  function change(){
     setLightmode(pre=>!pre)
  }
  return (
    <div className="App">
     <Nav change={change} lightmode={lightmode}/>
   <Weather lightmode={lightmode}/>
    </div>
  );
}

export default App;
