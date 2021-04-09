import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {

const [weather, setWeather] = useState({});
const [city, setCity] = useState("");

function displayWeather(response) {
  
}

function handleSubmit(event) {
  event.preventDefault();

  let apiKey = "d5d9b9ab70b425b5936beab173bca281";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units="metric"`;

  axios.get(apiUrl).then(displayWeather);
}

function changeCity(event) {
  event.preventDefault();
  setCity(event.target.value);
}

  

    return (
    <div className="form">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city..."
            onChange= {changeCity}
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
      <h1>Sydney</h1>
        <ul>
          <li>Date</li>
          <li>Time</li>
          <li className="description">Sunny</li>
          <li><span className="temperature">21</span>
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
            <li>Humidity | <strong>40</strong><strong>%</strong></li>
            <li>Wind | <strong>12</strong><strong>km/h</strong></li>
          </ul>
        </div>
      </div>
    </div>

      
     

     </div>
  );
} 