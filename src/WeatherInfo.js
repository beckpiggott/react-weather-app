import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="current-weather">
      <div className="row">
        <div className="col-sm-4 ">
          <div className="weatherIcon">
              <WeatherIcon code={props.data.icon} size={100}/>
        </div>
        </div>

        <div className="col-sm-4">
        <div className="currentWeather">
      <h1>{props.data.city}</h1>
        <ul>
          <li><FormattedDate date={props.data.date} /></li>
          
          <li className="description">{props.data.description}</li>
          <WeatherTemperature celsius={props.data.temperature} />
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