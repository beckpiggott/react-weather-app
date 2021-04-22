import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max)
    return `${temperature}°C`;
  }

  function day() {
     let date = new Date (props.data.dt * 1000);
     let day = date.getDay();
     
     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun;"]

     return days[day];
  }
    return (
        <div>
        <div className="forecast-day">{day}</div>
        <weatherIcon code={props.data.weather[0].icon}/>
        <div className="forecast-temperature">{maxTemperature()}°C</div>
                 </div>
    );
}