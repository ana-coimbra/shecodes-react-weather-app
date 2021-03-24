import React, { useState } from "react";

import "./Weather.css";

export default function Weather(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertoCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Weather">
        {" "}
        <div className="Conversion">
          <span className="celsiusTemperatureOff">°C</span> |{" "}
          <a
            href="/"
            onClick={convertToFahrenheit}
            className="fahrenheitTemperature"
          >
            °F
          </a>
        </div>
        <h2>{Math.round(props.celsius)}</h2>
        <span className="degreeTemperature">°</span>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <div className="Conversion">
          <a href="/" onClick={convertoCelsius} className="celsiusTemperature">
            °C
          </a>{" "}
          | <span className="fahrenheitTemperatureOff">°F</span>
        </div>
        <h2>{Math.round(fahrenheit())}</h2>
        <span className="degreeTemperature">°</span>
      </div>
    );
  }
}
