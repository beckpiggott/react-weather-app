import React from "react";

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday"]

    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours= `0{hours}`;
    } 
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes= `0{minutes}`;
    } 

    return (
        <div>
            <ul>
                <li>{day}</li>
                <li>{hours}:{minutes}</li>
            </ul>
        </div>
    );

}