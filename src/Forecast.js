import React, { useState } from "react";
import "./Forecast.css"
import ForecastDay from "./ForecastDay";
import axios from "axios";


export default function Forecast(props) {
    let[loaded, setLoaded] = useState(false);
    let[forecast, setForecast] = useState(null);

function handleResponse(response) {
   setForecast(response.data.daily);
   setLoaded(true);
}
console.log(props);

if(loaded) {
    console.log(forecast);
    return (
       <div className="forecast">
             <div className="row">
                 <div className="col-sm-2">
                    <ForecastDay data={forecast[0]}/>  
                 </div>
             </div>
        </div>
   );
} else {
    let apiKey = "d5d9b9ab70b425b5936beab173bca281";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;

    }
}
