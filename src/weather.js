import React from "react"
import "./weather.css"
import Dailyweather from "./daily-weather.js"
export default function Weather(props){
    let [weatherData,setWeatherData]=React.useState({})
    let [count,setCount]=React.useState(0)
    let[result,setResult]=React.useState("")
    let[errors,setError]=React.useState("");
    let APIkey="0df791a72d0117d8d65a3527084c1bab"
        React.useEffect(
          
            function(){    
                
                  if(result==="" && count!==0){

                     alert("please enter city name")
                  
                  }
                  else{
                  
                     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${result}&appid=${APIkey}&units=metric`)
                    .then(val=> val.json())
                    .then(msg=>{
                        if(msg.cod==="404"){
                            setError("City not found")
                            setWeatherData("")
                        }
                       
                        else{
                            setWeatherData(msg)
                           
                            setError("")
                           
                        }})
                   
                    .catch((err)=>console.log(err))
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
         <div className={props.lightmode?"container-light":"container"}>
         <div className={props.lightmode?"weather-light":"weather"}>
             <form>
             <input type="search" placeholder="Search city" onChange={change}></input>
             <button onClick={get}>Search</button>
             </form>
            
         <div className={props.lightmode?"details-change":"details"}> 
               {weatherData.sys && <h4>{new Date().toLocaleString("hi-IN") }</h4>}
                {weatherData.sys &&<h1><i className="fa-solid fa-location-dot"></i>{weatherData.name},{weatherData.sys.country}</h1>}
                <div className="temp">
                    {weatherData.weather&&<img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather_icon"></img>}
                    {weatherData.main&&<h1>{weatherData.main.temp}&#8451;</h1>} 
                </div>
                  {weatherData.main&&<h3>feels like:  {weatherData.main.feels_like}&#8451; , {weatherData.weather[0].main}</h3>} 
                
                  {errors && <div className="error"><h3>{errors}</h3></div>}
                  
                <ul>
                 {weatherData.main&&<li><i className="fa-solid fa-droplet"></i>{weatherData.main.humidity} &#37;<span>Humidity</span></li>} 
                 {weatherData.main&&<li><i className="fa-solid fa-gauge"></i>{weatherData.main.pressure} hpa<span>Pressure</span></li>} 
                 {weatherData.wind&&<li><i className="fa-solid fa-wind"></i>{weatherData.wind.speed} m/s<span>Windspeed</span></li>} 
                 {weatherData.main&& <li><i className="fa-solid fa-arrow-up"></i>{weatherData.main.temp_max}&#8451;<span><i className="fa-solid fa-arrow-down"></i>{weatherData.main.temp_min}&#8451;</span></li>} 
                </ul>
                
            </div>
            </div>
            <Dailyweather lightmode={props.lightmode} count={count} result={result} APIkey={APIkey} ></Dailyweather>
         </div>
    )
}

// https://api.openweathermap.org/data/2.5/forecast?q=chennai&appid=99099ac343239068d87138b568737a7b&units=metric