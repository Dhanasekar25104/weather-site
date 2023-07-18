import React from "react"
import "./nav.css"
export default function Nav(props){
  
    return(
      <div className={props.lightmode?"light":"nav"}>
       
       
     <h2>simple weather</h2>
     {props.lightmode?<i className="fa-solid fa-moon" onClick={props.change}></i> : <i className="fa-solid fa-sun" onClick={props.change}></i>}     
     </div>
    )
}