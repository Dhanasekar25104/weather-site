import "./daily-weather.css"
import React from "react";
export default function Dailyweather(props){
    let [weatherData,setWeatherData]=React.useState({})
    let[errors,setError]=React.useState("");


    React.useEffect(
          
        function(){    
              
                 fetch(` https://api.openweathermap.org/data/2.5/forecast?q=${props.result}&appid=${props.APIkey}&units=metric`)
                .then(val=> val.json())
                .then(msg=>{
                    if(msg.cod==="404"){
                        setError("city not found")
                        setWeatherData("")
                    }
                   
                    else{
                        setWeatherData(msg)
                        
                        setError("")
                       
                    }})
               
                .catch((err)=>console.log(err))
                 }
             
        ,[props.count]
      )
    return(
      <div className={props.lightmode?"daily-weather-light":"daily-weather"}>
            
            <div className="daily-data">
            <div className="daily-data-detail-temp">
                        {weatherData.list ? <h6>{weatherData.list[0].dt_txt}</h6>:null}   
                      <div className="img-temp">
                        {weatherData.list ?<h4><img src={`http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`} alt="weather_icon"></img></h4>:null}
                        {weatherData.list?<h3>{weatherData.list[0].main.temp}&#8451;</h3>:null} 
                        </div>
                </div>


                <div >
                     {weatherData.list &&<h4><i className="fa-solid fa-droplet"></i>{weatherData.list[0].main.humidity} &#37;</h4>}
                   {weatherData.list && <h4><i className="fa-solid fa-wind"></i>{weatherData.list[0].wind.speed} m/s</h4>}
                </div>


                <div className="temp-up-down">
                   {weatherData.list &&  <h4><i className="fa-solid fa-gauge"></i>{weatherData.list[0].main.pressure} hpa</h4>} 
                   {weatherData.list && <h4><i className="fa-solid fa-arrow-up"></i>{weatherData.list[0].main.temp_max} &#8451;</h4>}
                   {weatherData.list && <h4><i className="fa-solid fa-arrow-down"></i>{weatherData.list[0].main.temp_min} &#8451;</h4>}
                </div>

            </div> 


             <div className="daily-data">
                
                <div className="daily-data-detail-temp">
                        {weatherData.list ? <h6>{weatherData.list[8].dt_txt}</h6>:null}   
                      <div className="img-temp">
                        {weatherData.list ?<h4><img src={`http://openweathermap.org/img/w/${weatherData.list[8].weather[0].icon}.png`} alt="weather_icon"></img></h4>:null}
                        {weatherData.list?<h3>{weatherData.list[8].main.temp}&#8451;</h3>:null} 
                        </div>
                </div>


                <div>
                     {weatherData.list &&<h4><i className="fa-solid fa-droplet"></i>{weatherData.list[8].main.humidity} &#37;</h4>}
                   {weatherData.list && <h4><i className="fa-solid fa-wind"></i>{weatherData.list[8].wind.speed} m/s</h4>}
                </div>


                <div className="temp-up-down">
                   {weatherData.list &&  <h4><i className="fa-solid fa-gauge"></i>{weatherData.list[8].main.pressure} hpa</h4>} 
                   {weatherData.list && <h4><i className="fa-solid fa-arrow-up"></i>{weatherData.list[8].main.temp_max} &#8451;</h4>}
                   {weatherData.list &&<h4> <i className="fa-solid fa-arrow-down"></i>{weatherData.list[8].main.temp_min} &#8451;</h4>}
                </div>

            </div> 

            <div className="daily-data">
            <div className="daily-data-detail-temp">
                        {weatherData.list ? <h6>{weatherData.list[16].dt_txt}</h6>:null}   
                      <div className="img-temp">
                        {weatherData.list ?<h4><img src={`http://openweathermap.org/img/w/${weatherData.list[16].weather[0].icon}.png`} alt="weather_icon"></img></h4>:null}
                        {weatherData.list?<h3>{weatherData.list[16].main.temp}&#8451;</h3>:null} 
                        </div>
                </div>


                <div>
                     {weatherData.list &&<h4><i className="fa-solid fa-droplet"></i>{weatherData.list[16].main.humidity} &#37;</h4>}
                   {weatherData.list && <h4><i className="fa-solid fa-wind"></i>{weatherData.list[16].wind.speed} m/s</h4>}
                </div>


                <div className="temp-up-down">
                   {weatherData.list &&  <h4><i className="fa-solid fa-gauge"></i>{weatherData.list[16].main.pressure} hpa</h4>} 
                   {weatherData.list && <h4><i className="fa-solid fa-arrow-up"></i>{weatherData.list[16].main.temp_max} &#8451;</h4>}
                   {weatherData.list &&<h4> <i className="fa-solid fa-arrow-down"></i>{weatherData.list[16].main.temp_min} &#8451;</h4>}
                </div>

            </div> 
            

            <div className="daily-data">
            <div className="daily-data-detail-temp">
                        {weatherData.list ? <h6>{weatherData.list[24].dt_txt}</h6>:null}   
                      <div className="img-temp">
                        {weatherData.list ?<h4><img src={`http://openweathermap.org/img/w/${weatherData.list[24].weather[0].icon}.png`} alt="weather_icon"></img></h4>:null}
                        {weatherData.list?<h3>{weatherData.list[24].main.temp}&#8451;</h3>:null} 
                        </div>
                </div>


                <div>
                     {weatherData.list &&<h4><i className="fa-solid fa-droplet"></i>{weatherData.list[24].main.humidity} &#37;</h4>}
                   {weatherData.list && <h4><i className="fa-solid fa-wind"></i>{weatherData.list[24].wind.speed} m/s</h4>}
                </div>


                <div className="temp-up-down">
                   {weatherData.list &&  <h4><i className="fa-solid fa-gauge"></i>{weatherData.list[24].main.pressure} hpa</h4>} 
                   {weatherData.list && <h4><i className="fa-solid fa-arrow-up"></i>{weatherData.list[24].main.temp_max} &#8451;</h4>}
                   {weatherData.list &&<h4> <i className="fa-solid fa-arrow-down"></i>{weatherData.list[24].main.temp_min} &#8451;</h4>}
                </div>

            </div> 

            <div className="daily-data">
            <div className="daily-data-detail-temp">
                        {weatherData.list ? <h6>{weatherData.list[32].dt_txt}</h6>:null}   
                      <div className="img-temp">
                        {weatherData.list ?<h4><img src={`http://openweathermap.org/img/w/${weatherData.list[32].weather[0].icon}.png`} alt="weather_icon"></img></h4>:null}
                        {weatherData.list?<h3>{weatherData.list[32].main.temp}&#8451;</h3>:null} 
                        </div>
                </div>


                <div>
                     {weatherData.list &&<h4><i className="fa-solid fa-droplet"></i>{weatherData.list[32].main.humidity} &#37;</h4>}
                   {weatherData.list && <h4><i className="fa-solid fa-wind"></i>{weatherData.list[32].wind.speed} m/s</h4>}
                </div>


                <div className="temp-up-down">
                   {weatherData.list &&  <h4><i className="fa-solid fa-gauge"></i>{weatherData.list[32].main.pressure} hpa</h4>} 
                   {weatherData.list && <h4><i className="fa-solid fa-arrow-up"></i>{weatherData.list[32].main.temp_max} &#8451;</h4>}
                   {weatherData.list &&<h4> <i className="fa-solid fa-arrow-down"></i>{weatherData.list[32].main.temp_min} &#8451;</h4>}
                </div>

            </div> 


        </div>
    )
}