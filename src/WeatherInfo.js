import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
    return (
        <div className="current-weather">
      <div className="row">
        <div className="col-sm-4 ">
          <div className="weatherIcon">
              <WeatherIcon code={props.data.icon} />
        </div>
        </div>

        <div className="col-sm-4">
        <div className="currentWeather">
      <h1>{props.data.city}</h1>
        <ul>
          <li><FormattedDate date={props.data.date} /></li>
          
          <li className="description">{props.data.description}</li>
          <li><span className="temperature">{Math.round(props.data.temperature)}</span>
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
            <li>Humidity | <strong>{props.data.humidity}</strong><strong>%</strong></li>
            <li>Wind | <strong>{Math.round(props.data.wind)}</strong><strong>km/h</strong></li>
          </ul>
        </div>
      </div>
    </div>
    );
}