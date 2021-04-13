import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ ready: false});

function displayWeather(response) {
  setWeatherData ({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    city: response.data.name,
    description: response.data.weather[0].description,
    date: "Wednesday",
    time: "07:00"
  });
}

if (weatherData.ready) {
  return (
    <div className="form">
      <form className="row g-3">
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city..."
            autoFocus= "on"
          />
        </div>
        <div className="col-sm-3">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
        <div className="col-sm-3">
        <button
        type="submit"
        className="btn btn-primary mb-3">
          Current
        </button>
        </div>
      </form>

      <div className="current-weather">
      <div className="row">
        <div className="col-sm-4 ">
          <div className="weatherIcon">
        <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="#1f2b36"
    size= {100}
    animate={true}
          /></div>
        </div>

        <div className="col-sm-4">
        <div className="currentWeather">
      <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.time}</li>
          <li className="description">{weatherData.description}</li>
          <li><span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="units">
            <a href="/">
          <sup>°C</sup>
        </a>{" "}
        |
        <a href="/">
          <sup>°F</sup>
        </a>
            </span>
          </li>
        </ul>
       </div>
      </div>

        <div className="col-sm-4 weatherExtras">
          <ul>
            <li>Humidity | <strong>{weatherData.humidity}</strong><strong>%</strong></li>
            <li>Wind | <strong>{weatherData.wind}</strong><strong>km/h</strong></li>
          </ul>
        </div>
      </div>
    </div>
 </div>
  );
  
} else {
  let apiKey = "d5d9b9ab70b425b5936beab173bca281";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
   return "Loading..."
}
}
