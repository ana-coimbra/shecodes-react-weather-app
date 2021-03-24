import React from "react";

import "./Details.css";

export default function Details(props) {
  return (
    <div className="Details">
      <div className="weatherDetails">Weather details</div>

      <div className="temperatureDetails">
        Temperature
        <span className="temperatureValues">
          {Math.round(props.data.maxTemperature)}º{" "}
          {Math.round(props.data.minTemperature)}º
        </span>
      </div>

      <div className="apparentTemperature">
        Feels like
        <span className="temperatureValue">
          {Math.round(props.data.feelsLike)}ºC
        </span>
      </div>

      <div className="Humidity">
        Humidity
        <span className="humidityValue">{props.data.humidity}%</span>
      </div>

      <div className="Wind">
        Wind
        <span className="windValue">{Math.round(props.data.wind)} km/h</span>
      </div>
    </div>
  );
}
