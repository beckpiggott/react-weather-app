import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <ul>
            <li><span className="temperature">{Math.round(props.celsius)}</span>
            <span className="units">
          <sup>°C</sup>
        {" "}
        |
          <sup><a href="/" onClick={showFahrenheit}>°F</a></sup>
            </span>
          </li>
          </ul>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return (
            <ul>
            <li><span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="units">
          <sup><a href="/" onClick={showCelsius}>°C</a></sup>
        {" "}
        |
          <sup>°F</sup>
            </span>
          </li>
          </ul>
        )
    }
}