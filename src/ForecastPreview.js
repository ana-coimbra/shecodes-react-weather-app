import React from "react";

import Icon from "./Icon";

import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:00`;
  }

  function temperatureMax() {
    let temperature = Math.round(props.data.main.temp_max);
    return `${temperature}°`;
  }

  function temperatureMin() {
    let temperature = Math.round(props.data.main.temp_min);
    return `${temperature}°`;
  }

  return (
    <div className="ForecastPreview">
      <Icon data={props.data.weather[0].main} />
      <span className="forecastTime">{hours()}</span>
      <span className="forecastTemperature">
        {temperatureMax()} {temperatureMin()}
      </span>
    </div>
  );
}
