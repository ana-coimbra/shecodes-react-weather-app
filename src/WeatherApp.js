import React from "react";

import Weather from "./Weather";
import Quotes from "./Quotes";
import Settings from "./Settings";

import "./WeatherApp.css";

export default function WeatherApp(props) {
  return (
    <div className="WeatherApp">
      <div className="City">
        <h1>{props.data.city}</h1>
        <span className="currentWeather"> | Current Weather</span>
      </div>
      <div className="row">
        <div className="col-md-5">
          <Weather celsius={props.data.temperature} />
        </div>
        <div className="col-md-7">
          <Quotes data={props.data.weatherSituation} />
        </div>
      </div>
      <Settings />
    </div>
  );
}
