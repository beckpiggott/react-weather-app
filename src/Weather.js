import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";


export default function Weather(props) {

  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

function displayWeather(response) {
  console.log(response.data);
  setWeatherData ({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    city: response.data.name,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    date: new Date (response.data.dt * 1000)
  });
}

function search() {
  let apiKey = "d5d9b9ab70b425b5936beab173bca281";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
   event.preventDefault();
   search();

}

function handleCity(event) {
  setCity(event.target.value);

}

if (weatherData.ready) {
  return (
    <div className="form">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city..."
            autoFocus= "on"
            onChange={handleCity}
          />
        </div>
        <div className="col-sm-3">
          <button type="submit" className="btn btn-primary mb-3" >
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
      <WeatherInfo data={weatherData}/>
      <Forecast coordinates={weatherData.coordinates}/>
     

      
 </div>
  );
  
} else {
  search();
   return "Loading..."
}
}
