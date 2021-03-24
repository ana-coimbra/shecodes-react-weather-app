import React, { useState } from "react";

import "./Settings.css";

export default function Settings() {
  const [formattedDate, setFormattedDate] = useState("");

  function displayFormattedSettings(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let weekDay = days[date.getDay()];

    let day = date.getDate();

    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let month = months[date.getMonth()];

    let year = date.getFullYear();

    setFormattedDate(
      `${hours}:${minutes} - ${weekDay}, ${day} ${month} ${year}`
    );
  }

  if (formattedDate) {
    return (
      <div className="Settings">
        <hr />
        <div className="currentTimeDate">{formattedDate}</div>
      </div>
    );
  } else {
    displayFormattedSettings(new Date());
    return "Loading...";
  }
}
