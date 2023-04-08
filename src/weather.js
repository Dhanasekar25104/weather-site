import React from "react"
import "./weather.css"


export default function Weather(){
    let [weatherData,setWeatherData]=React.useState({})
    let [count,setCount]=React.useState(0)
    let[result,setResult]=React.useState("")
    let APIkey="0df791a72d0117d8d65a3527084c1bab"
        React.useEffect(
          
            function(){    
                
                  if(result==="" && count!==0){

                     alert("please enter city name")
                  
                  }
                  else{
                  
                     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=${APIkey}&units=metric`)
                    .then(val=> val.json())
                    .then(msg=>setWeatherData(msg))
                    .catch((error)=>(console.log(error)))
                     }
            },[count]
          )
         
        function get(event){
            event.preventDefault()
            setCount(val=>val+1)
        }
        function change(event){        
            setResult(event.target.value)
        }
    return(
      
         <div className="weather">
             <form>
             <input type="search" placeholder="Search city" onChange={change}></input>
             <button onClick={get}>Search</button>
             </form>
            
            <div className="details"> 
               {weatherData.sys? <h4>{new Date().toLocaleString("hi-IN") }</h4>:null}
                {weatherData.sys?<h1><i className="fa-solid fa-location-dot"></i>{weatherData.name},{weatherData.sys.country}</h1>:null}
                <div className="temp">
                    {weatherData.weather?<img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather_icon"></img>:null}
                    {weatherData.main? <h1>{weatherData.main.temp}&#8451;</h1>:null} 
                </div>
                  {weatherData.main?<h3>feels like:  {weatherData.main.feels_like}&#8451; , {weatherData.weather[0].main}</h3>: <h2>&#128515; Type something...</h2>} 
                <ul>
                    
                 {weatherData.main?<li><i className="fa-solid fa-droplet"></i>{weatherData.main.humidity} &#37;<span>Humidity</span></li>:null} 
                 {weatherData.main?<li><i className="fa-solid fa-gauge"></i>{weatherData.main.pressure} hpa<span>Pressure</span></li>:null} 
                 {weatherData.wind?<li><i className="fa-solid fa-wind"></i>{weatherData.wind.speed} m/s<span>Windspeed</span></li>:null} 
                 {weatherData.main? <li><i className="fa-solid fa-arrow-up"></i>{weatherData.main.temp_max}&#8451;<span><i className="fa-solid fa-arrow-down"></i>{weatherData.main.temp_min}&#8451;</span></li>:null} 
                </ul>
                
            </div>
            
         </div>
    )
}

