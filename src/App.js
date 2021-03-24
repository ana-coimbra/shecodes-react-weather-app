import React, { useState } from "react";
import axios from "axios";

import WeatherApp from "./WeatherApp";
import Details from "./Details";
import Forecast from "./Forecast";
import Footer from "./Footer";

import clearImage from "./images/clear.png";
import cloudsImage from "./images/clouds.png";
import mistImage from "./images/mist.png";
import rainImage from "./images/rain.png";
import snowImage from "./images/snow.png";
import thunderstormImage from "./images/thunderstorm.png";

import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Alaska");

  const imageMapping = {
    Clear: clearImage,
    Clouds: cloudsImage,
    Mist: mistImage,
    Smoke: cloudsImage,
    Haze: cloudsImage,
    Dust: mistImage,
    Fog: mistImage,
    Sand: cloudsImage,
    Ash: cloudsImage,
    Squal: cloudsImage,
    Tornado: thunderstormImage,
    Snow: snowImage,
    Rain: rainImage,
    Drizzle: rainImage,
    Thunderstorm: thunderstormImage,
  };

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      weatherSituation: response.data.weather[0].main,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "**************************";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div
          className="containerApp"
          style={{
            backgroundImage: `url(${
              imageMapping[weatherData.weatherSituation]
            })`,
          }}
        >
          <div className="row">
            <div className="col">
              <WeatherApp data={weatherData} />
            </div>
            <div className="col-4">
              <div className="Search">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Enter a city"
                    autoComplete="off"
                    className="searchCity"
                    onChange={handleCityChange}
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="submitButton"
                  />
                </form>
              </div>
              <Details data={weatherData} />
              <Forecast city={weatherData.city} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return "";
  }
}
