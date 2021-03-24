import React from "react";

import "./Quotes.css";

export default function Quotes(props) {
  const quoteMapping = {
    Clear: <em>We need clear days to see the horizons</em>,
    Clouds: <em>A grey day provides the best light...</em>,
    Mist: <em>I tried to catch the fog, but I mist.</em>,
    Smoke: <em>A grey day provides the best light...</em>,
    Haze: <em>I tried to catch the fog, but I mist.</em>,
    Dust: "Complaining about the weather...",
    Fog: <em>Beyond the fog lies clarity...</em>,
    Sand: "Complaining about the weather...",
    Ash: `>Complaining about the weather...`,
    Squal: <em>The wind plays its own music...</em>,
    Tornado: "Be careful, thunderstorm outside.",
    Snow: (
      <span>
        <em>Winter is coming...</em> or maybe it's just snowing.
      </span>
    ),
    Rain: "The meteorological equivalent of a bad date.",
    Drizzle: "The meteorological equivalent of a bad date.",
    Thunderstorm: "Be careful, thunderstorm outside.",
  };

  const descriptionMapping = {
    Clear: "It's a clear day",
    Clouds: "It's cloudy outside.",
    Mist: "It's a misty day.",
    Smoke: "It's cloudy outside.",
    Haze: "It's misty outside.",
    Dust: "It's dusty outside.",
    Fog: "It's foggy outside.",
    Sand: "It's dusty outside.",
    Ash: "It's ashy outside.",
    Squal: "It's windy outside.",
    Tornado: "It's stormy outside.",
    Snow: "It's snowy outside.",
    Rain: "It's rainy outside.",
    Drizzle: "It's rainy outside.",
    Thunderstorm: "It's stormy outside.",
  };

  return (
    <div className="Quotes">
      <div className="humorQuote">{quoteMapping[props.data]}</div>
      <div className="weatherDescription">{descriptionMapping[props.data]}</div>
    </div>
  );
}
