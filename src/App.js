import React, { useState, useEffect } from "react";

import "./App.css";

import WeatherForecast from "./components/WeatherForecast";
import WeatherNow from "./components/WeatherNow";

const App = () => {
  const [cityname, setCityname] = useState("Liberec"); // Vybrané město
  const [availableCities, setAvailableCities] = useState([]); // Seznam měst z WeatherNow

  // Funkce pro získání seznamu měst
  const fetchCitiesFromWeatherNow = () => {
    // Nahraďte pevně daný seznam voláním API, pokud má být dynamický
    setAvailableCities([
      "Liberec",
      "Praha",
      "Plzeň",
      "České Budějovice",
      "Brno",
      "Olomouc",
      "Ostrava",
    ]);
  };

  useEffect(() => {
    // Načtení dostupných měst při prvním renderování
    fetchCitiesFromWeatherNow();
  }, []);

  // Zpracování změny výběru města
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
          {/* Dropdown místo tlačítek */}
          <div className="dropdown-group">
            <label htmlFor="city-dropdown">Vyberte město: </label>
            <select
              id="city-dropdown"
              className="dropdown"
              value={cityname}
              onChange={handleCityChange}
            >
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Komponenty s daty pro vybrané město */}
          <WeatherNow cityname={cityname} />
          <WeatherForecast cityname={cityname} />
        </div>
      </div>
    </div>
  );
};

export default App;
