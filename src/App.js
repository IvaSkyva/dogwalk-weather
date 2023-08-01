import React, {useEffect, useState} from "react";

import "./App.css";


 const App = () => {

    const [cityname, setCityname] = useState('Prague')

    const handleClick = (event) => {
      setCityname(event.target.value)
    }

    const [city, setCity] = useState('');
    const [land, setLand] = useState('')
    const [temper, setTemper] = useState('');
    const [sky, setSky] = useState('');
    const [windy, setWindy] = useState('');
    const [humid, setHumid] = useState('');
    const [icons, setIcons] = useState('');

    const [sunrise, setSunrise] = useState('')
    const millisecondsSunrise = sunrise * 1000
    const dateObjectSunrise = new Date(millisecondsSunrise)
    const humanDateFormatSunrise = dateObjectSunrise.toLocaleString()


    const [sunset, setSunset] = useState('')
    const millisecondsSunset = sunset * 1000 
    const dateObjectSunset = new Date(millisecondsSunset)
    const humanDateFormatSunset = dateObjectSunset.toLocaleString() 

    

  const fetchWeather = () => {
  
    fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&APPID=${process.env.REACT_APP_MY_API_ID}`
    )
    .then(response => response.json())

    .then(data => {
      return (
        (setCity(data.name)) + (setLand(data.sys.country)) + (setTemper(data.main.temp)) + (setSky(data.weather[0].main)) + (setWindy(data.wind.speed)) + (setHumid(data.main.humidity)) + (setIcons(data.weather[0].icon)) + (setSunrise(data.sys.sunrise)) + (setSunset(data.sys.sunset)) 
      )
    })
    
  }

    useEffect(() => {
      fetchWeather();
    }, [cityname] );

    const [dayonetemp, setDayonetemp] = useState('')
    const [icondayone, setIcondayone] = useState('');
    const [dayone, setDayone] = useState('')
    const millisecondsDayone = dayone * 1000 
    const dateObjectDayone = new Date(millisecondsDayone)
    const humanDateFormatDayone = dateObjectDayone.toLocaleString()

    const [daytwotemp, setDaytwotemp] = useState('')
    const [icondaytwo, setIcondaytwo] = useState('');
    const [daytwo, setDaytwo] = useState('')
    const millisecondsDaytwo = daytwo * 1000 
    const dateObjectDaytwo = new Date(millisecondsDaytwo)
    const humanDateFormatDaytwo = dateObjectDaytwo.toLocaleString() 

    const [daythreetemp, setDaythreetemp] = useState('')
    const [icondaythree, setIcondaythree] = useState('');
    const [daythree, setDaythree] = useState('')
    const millisecondsDaythree = daythree * 1000 
    const dateObjectDaythree = new Date(millisecondsDaythree)
    const humanDateFormatDaythree = dateObjectDaythree.toLocaleString()
 

  const fetchForecast = () => {

     fetch(
       `http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&units=metric&APPID=${process.env.REACT_APP_MY_API_ID}`
     )
     .then(responses => responses.json())
     .then(datas => {
        return (
            (setDayone(datas.list[8].dt)) + (setDayonetemp(datas.list[8].main.temp)) +(setIcondayone(datas.list[8].weather[0].icon)) + (setDaytwo(datas.list[16].dt)) + (setDaytwotemp(datas.list[16].main.temp)) +(setIcondaytwo(datas.list[16].weather[0].icon)) + (setDaythree(datas.list[24].dt)) + (setDaythreetemp(datas.list[24].main.temp)) +(setIcondaythree(datas.list[24].weather[0].icon))
          
        )

     })

  }

  useEffect(() => {
    fetchForecast();
  }, [cityname] ); 

 

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          { <div className="button-group">
            <button className="button"onClick={handleClick} value='Pribram'>Pribram</button>
            <button className="button"onClick={handleClick} value='Prague' >Prague</button>
            <button className="button"onClick={handleClick} value='Pilsen'>Pilsen</button>
          </div> }

<div className="weather__current">
        <h2 className="weather__city" id="mesto">
            {city}  {land}
        </h2>
        <div className="weather__inner weather__inner--center">
            <div className="weather__section weather__section--temp">
                <span className="weather__temp-value" id="teplota">

                </span>
                <span className="weather__temp-unit"> {Math.round(temper)} °C</span>
                <div className="weather__description" id="popis">
                    {sky}
                </div>
            </div>
            <div
                className="weather__section weather__section--icon"
                id="ikona"
            >

                {<img
                    src={`http://openweathermap.org/img/wn/${icons}@2x.png`}
                    alt="current weather icon" />}
            </div>
        </div>
        <div className="weather__inner">
            <div className="weather__section">
                <h3 className="weather__title">Wind</h3>
                <div className="weather__value">
                    <span id="wind">{windy}</span> km/h
                </div>
            </div>
            <div className="weather__section">
                <h3 className="weather__title">Humidity</h3>
                <div className="weather__value">
                    <span id="humidity">{humid}</span> %
                </div>
            </div>
        </div>
        <div className="weather__inner">
            <div className="weather__section">
                <h3 className="weather__title">Sunrise</h3>
                <div className="weather__value">
                    <span id="sunrise">{humanDateFormatSunrise}</span>
                </div>
            </div>
            <div className="weather__section">
                <h3 className="weather__title">Sunset</h3>
                <div className="weather__value">
                    <span id="sunset">{humanDateFormatSunset}</span>
                </div>
            </div>
        </div>
    </div>


    <div className="weather__forecast" id="predpoved">
        <div className="forecast">

          <div className="forecast__day">
            {humanDateFormatDayone}
                        
          </div>
          
          <div className="forecast__icon">
            { <img
              src={`http://openweathermap.org/img/wn/${icondayone}@2x.png`}
              style={{ height: "100%" }}
              alt="current weather icon"
            />}
          </div>
          <div className="forecast__temp"> {Math.round(dayonetemp)} °C</div>

        </div>

        <div className="forecast">

          <div className="forecast__day">
             {humanDateFormatDaytwo}              
          </div>
          
          <div className="forecast__icon">
            { <img
              src={`http://openweathermap.org/img/wn/${icondaytwo}@2x.png`}
              style={{ height: "100%" }}
              alt="current weather icon"
            />}
          </div>
          <div className="forecast__temp"> {Math.round(daytwotemp)} °C</div>

        </div>

        <div className="forecast">

          <div className="forecast__day">
           {humanDateFormatDaythree}              
          </div>

          <div className="forecast__icon">
            { <img
              src={`http://openweathermap.org/img/wn/${icondaythree}@2x.png`}
              style={{ height: "100%" }}
              alt="current weather icon"
            />}
          </div>
          <div className="forecast__temp"> {Math.round(daythreetemp)} °C</div>

          </div>

      </div>

 
    
 
          

          


        </div>
      </div>
    </div>
  );
};


export default App;
