import React, { useEffect, useState } from "react";
import WeatherImage from "../WeatherImage";
import { getTemperClass } from "../../weatherBackground";
import "./style.css";

const WeatherNow = ({ cityname, onWeatherDataUpdate }) => {
  const [city, setCity] = useState("");
  const [temper, setTemper] = useState([]);
  const [tempermax, setTempermax] = useState([]);
  const [tempermin, setTempermin] = useState([]);
  const [windy, setWindy] = useState("");
  const [humid, setHumid] = useState("");
  const [snow, setSnow] = useState("");
  const [visibility, setVisibility] = useState("");
  const [icons, setIcons] = useState("");

  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&lang=cs&APPID=${process.env.REACT_APP_MY_API_ID}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setCity(data.name);
        setTemper(data.main.feels_like);
        setTempermax(data.main.temp_max);
        setTempermin(data.main.temp_min);
        setWindy(data.wind.speed);
        setHumid(data.main.humidity);
        setSnow(data.snow ? data.snow["1h"] : 0); // Srážky za poslední hodinu
        setVisibility(data.visibility);
        setIcons(data.weather[0].icon);
        setSunrise(data.sys.sunrise);
        setSunset(data.sys.sunset);

        // Předání dat zpět do App komponenty
        onWeatherDataUpdate({
          city: data.name,
          temper: data.main.feels_like,
          tempermax: data.main.temp_max,
          tempermin: data.main.temp_min,
          windy: data.wind.speed,
          humid: data.main.humidity,
          snow: data.snow ? data.snow["1h"] : 0,
          visibility: data.visibility,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          icons: data.weather[0].icon,
        });
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [cityname,]);

  const temperClass = getTemperClass(icons);

  const formatTime = (timestamp) => {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={`weather__current ${temperClass}`}>
      <div className="weather__current">
        <h2 className="weather__city" id="mesto">
          {city}
        </h2>
        <div className="weather__inner weather__inner--center">
          <div className="weather__section weather__section--temp">
            <span className="weather__temp-value" id="teplota">
              {Math.round(temper)} °C
            </span>
            <div className="weather__section weather__section--icon" id="ikona">
              {icons && (
                <img
                  src={`https://openweathermap.org/img/wn/${icons}@2x.png`}
                  alt="current weather icon"
                />
              )}
              <div className="weather__title2">
                <WeatherImage icons={icons} temper={temper} />
              </div>
            </div>
          </div>

          <div className="weather__section weather__section--temp">
            <div className="weather__description" id="popis">
              <div>
                Pocitová teplota{" "}
                <span className="weather__description"> {Math.round(temper)} °C</span>
              </div>
              <div>
                Nejvyšší teplota{" "}
                <span className="weather__description"> {Math.round(tempermax)} °C</span>
              </div>
              <div>
                Nejnižší teplota{" "}
                <span className="weather__description"> {Math.round(tempermin)} °C</span>
              </div>
            </div>
          </div>
        </div>

        <div className="weather__inner">
          <div className="weather__section">
            <div className="weather__value">
              Srážky <span id="wind">{snow ? Math.round(snow) : 0}</span> mm/h
            </div>
            <div className="weather__value">
              Rychlost větru <span id="wind">{Math.round(windy * 3.6)}</span> km/h
            </div>
          </div>
          <div className="weather__section">
            <div className="weather__value">
              Viditelnost <span>{Math.round(visibility / 1000)}</span> km
            </div>
            <div className="weather__value">
              Vlhkost vzduchu <span id="humidity">{humid}</span> %
            </div>
          </div>
        </div>

        <div className="weather__inner">
          <div className="weather__section">
            <h3 className="weather__title">Slunce vychází</h3>
            <div className="weather__value">
              <span id="sunrise">{formatTime(sunrise)}</span>
            </div>
          </div>
          <div className="weather__section">
            <h3 className="weather__title">Slunce zapadá</h3>
            <div className="weather__value">
              <span id="sunset">{formatTime(sunset)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
