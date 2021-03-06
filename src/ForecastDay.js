import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max)
    return `${temperature}°C`;
  }

  function day() {
     let date = new Date (props.data.dt*1000);
     let day = date.getDay();
     
     let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

     return days[day];
  }
    return (
      <div>
        <div className="forecast-day">{day()}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={40}/>
        <div className="forecast-temperature">{maxTemperature()}</div>
      </div>
    );
}