import React, { useState } from "react";
import "./style.css"; 

const api = {
  key: "eb9d4268d7a73bd806c91b242144255e",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="weather-container">
      <h1 className="weather-header">WeatherBuddy Demo</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>
      {typeof weather.main !== "undefined" ? (
        <div className="weather-info">
          <h3 className="location">{weather.name}</h3><br></br>
          <h1 className="temperature">{weather.main.temp.toFixed(1)} °C</h1>
          <br></br>
          <h5 className="weather-condition">{weather.weather[0].main}</h5>
          <h5 className="weather-description">{weather.weather[0].description}</h5>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;
