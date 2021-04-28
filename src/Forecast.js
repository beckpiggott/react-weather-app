import React, { useState, useEffect } from "react";
import "./Forecast.css"
import ForecastDay from "./ForecastDay";
import axios from "axios";


export default function Forecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);

    }

    if(loaded) {
        return (
        <div className="forecast">
             <div className="row">
                    <div className="col-sm-2">
                      <ForecastDay data={forecast[0]}/> 
                    </div>
                    <div className="col-sm-2">
                      <ForecastDay data={forecast[1]}/> 
                    </div>      
                    <div className="col-sm-2">
                      <ForecastDay data={forecast[2]}/> 
                    </div>      
                    <div className="col-sm-2">
                      <ForecastDay data={forecast[3]}/> 
                    </div>      
                    <div className="col-sm-2">
                      <ForecastDay data={forecast[4]}/> 
                    </div>      
                    <div className="col-sm-2">
                      <ForecastDay data={forecast[5]}/> 
                    </div>                      
             </div>
        </div>
        );
    } else {

    let apiKey ="d5d9b9ab70b425b5936beab173bca281";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return(null);
    }

}
