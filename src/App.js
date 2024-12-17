import React, { useState, useEffect } from "react";

import "./App.css";

import WeatherForecast from "./components/WeatherForecast";
import WeatherNow from "./components/WeatherNow";

const App = () => {
  const [cities, setCities] = useState([]); // Seznam měst
  const [cityname, setCityname] = useState(""); // Vybrané město
  const [weatherData, setWeatherData] = useState(null); // Data o počasí pro vybrané město

  // Fetch seznamu měst z API
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/find?lat=50&lon=14&cnt=50&appid=${process.env.REACT_APP_MY_API_ID}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.list) {
          // Získání seznamu měst
          const cityList = data.list.map((city) => city.name);
          setCities(cityList);
          setCityname(cityList[0]); // Nastavit výchozí město
        }
      });
  }, []);

  // Callback pro přijetí dat o počasí z WeatherNow
  const handleWeatherDataUpdate = (data) => {
    setWeatherData(data);
  };

  // Změna vybraného města
  const handleCityChange = (event) => {
    setCityname(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Předpověď počasí pro vycházku se psem</h1>
        <h4>
          <a href="https://www.sepsem.cz">www.sepsem.cz</a>
        </h4>

        <div className="weather">
          {/* Dropdown menu pro výběr města */}
          <div className="dropdown-group">
            <label htmlFor="city-dropdown">Vyberte město: </label>
            <select
              id="city-dropdown"
              className="dropdown"
              value={cityname}
              onChange={handleCityChange}
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Komponenta pro počasí */}
          {cityname && (
            <WeatherNow
              cityname={cityname}
              onWeatherDataUpdate={handleWeatherDataUpdate}
            />
          )}

          {/* Zobrazení přijatých dat */}
          {weatherData && (
            <div className="weather-data">
              <h2>Data z API:</h2>
              <p>Město: {weatherData.city}</p>
              <p>Teplota: {Math.round(weatherData.temper)} °C</p>
              <p>Nejvyšší teplota: {Math.round(weatherData.tempermax)} °C</p>
              <p>Nejnižší teplota: {Math.round(weatherData.tempermin)} °C</p>
              <p>Rychlost větru: {Math.round(weatherData.windy * 3.6)} km/h</p>
              <p>Vlhkost: {weatherData.humid} %</p>
            </div>
          )}

          <WeatherForecast cityname={cityname} />
        </div>
      </div>
    </div>
  );
};

export default App;
