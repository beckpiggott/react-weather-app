import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Forecast.css"

export default function Forecast() {
    return (

<div className="forecast">
     <div className="row">
         <div className="col-sm-2">
             <div className="forecast-day">Wed</div>
             <div className="forecast-icon" ><ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="#1f2b36"
    size= {50}
    animate={true}
  /></div>
             <div className="forecast-temperature">22°C</div>
         </div>
         <div className="col-sm-2">
             <div className="forecast-day">Thu</div>
             <div className="forecast-icon"><ReactAnimatedWeather
    icon="PARTLY_CLOUDY_DAY"
    color="#1f2b36"
    size= {50}
    animate={true}
          /></div>
             <div className="forecast-temperature">19°C</div>
         </div>
         <div className="col-sm-2">
             <div className="forecast-day">Fri</div>
             <div className="forecast-icon"><ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="#1f2b36"
    size= {50}
    animate={true}
          /></div>
             <div className="forecast-temperature">22°C</div>
         </div>
         <div className="col-sm-2">
             <div className="forecast-day">Sat</div>
             <div className="forecast-icon"><ReactAnimatedWeather
    icon="RAIN"
    color="#1f2b36"
    size= {50}
    animate={true}
          /></div>
             <div className="forecast-temperature">18°C</div>
         </div>
         <div className="col-sm-2">
             <div className="forecast-day">Sun</div>
             <div className="forecast-icon"><ReactAnimatedWeather
    icon="PARTLY_CLOUDY_DAY"
    color="#1f2b36"
    size= {50}
    animate={true}
          /></div>
             <div className="forecast-temperature">19°C</div>
         </div>
         <div className="col-sm-2">
             <div className="forecast-day">Mon</div>
             <div className="forecast-icon"><ReactAnimatedWeather
    icon="RAIN"
    color="#1f2b36"
    size= {50}
    animate={true}
          /></div>
             <div className="forecast-temperature">19°C</div>
         </div>
        
     </div>
     </div>
    );
}