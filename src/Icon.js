import React from "react";

import clearIcon from "./images/icon_clear.png";
import cloudsIcon from "./images/icon_clouds.png";
import mistIcon from "./images/icon_mist.png";
import rainIcon from "./images/icon_rain.png";
import snowIcon from "./images/icon_snow.png";
import thunderstormIcon from "./images/icon_thunderstorm.png";

import "./Icon.css";

export default function Icon(props) {
  const iconMapping = {
    Clear: clearIcon,
    Clouds: cloudsIcon,
    Mist: mistIcon,
    Smoke: cloudsIcon,
    Haze: cloudsIcon,
    Dust: mistIcon,
    Fog: mistIcon,
    Sand: cloudsIcon,
    Ash: cloudsIcon,
    Squal: cloudsIcon,
    Tornado: thunderstormIcon,
    Snow: snowIcon,
    Rain: rainIcon,
    Drizzle: rainIcon,
    Thunderstorm: thunderstormIcon,
  };

  return (
    <span className="Icon">
      <img src={iconMapping[props.data]} alt="icon" className="iconImg" />
    </span>
  );
}
