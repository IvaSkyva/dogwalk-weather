import React, {useEffect, useState} from 'react';

const WeatherForecast = ({cityname}) => {

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


// eslint-disable-next-line react-hooks/exhaustive-deps
const fetchForecast = () => {

 fetch(
   `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&units=metric&APPID=${process.env.REACT_APP_MY_API_ID}`
 )
 .then(responses => responses.json())
 .then(datas => {
  console.log(datas)
    return (
        (setDayone(datas.list[8].dt)) + (setDayonetemp(datas.list[8].main.feels_like)) +(setIcondayone(datas.list[8].weather[0].icon)) + (setDaytwo(datas.list[16].dt)) + (setDaytwotemp(datas.list[16].main.feels_like)) +(setIcondaytwo(datas.list[16].weather[0].icon)) + (setDaythree(datas.list[24].dt)) + (setDaythreetemp(datas.list[24].main.feels_like)) +(setIcondaythree(datas.list[24].weather[0].icon))
      
    )

 })

}

useEffect(() => {
fetchForecast();
}, [cityname, fetchForecast] ); 

return (
    <div className="weather__forecast" id="predpoved">

    <h4 className="weather__value">Předpověď na další dny</h4>
    
      <div className="forecast">

        <div className="forecast__day">
          {humanDateFormatDayone}
                      
        </div>
        
        <div className="forecast__icon">
          { <img
            src={`https://openweathermap.org/img/wn/${icondayone}@2x.png`}
            style={{ height: "100%" }}
            alt="current weather icon"
          />}
        </div>
        <div className="forecast__temp">Pocitová teplota {Math.round(dayonetemp)} °C</div>

      </div>

      <div className="forecast">

        <div className="forecast__day">
           {humanDateFormatDaytwo}              
        </div>
        
        <div className="forecast__icon">
          { <img
            src={`https://openweathermap.org/img/wn/${icondaytwo}@2x.png`}
            style={{ height: "100%" }}
            alt="current weather icon"
          />}
        </div>
        <div className="forecast__temp">Pocitová teplota {Math.round(daytwotemp)} °C</div>

      </div>

      <div className="forecast">

        <div className="forecast__day">
         {humanDateFormatDaythree}              
        </div>

        <div className="forecast__icon">
          { <img
            src={`https://openweathermap.org/img/wn/${icondaythree}@2x.png`}
            style={{ height: "100%" }}
            alt="current weather icon"
          />}
        </div>
        <div className="forecast__temp">Pocitová teplota {Math.round(daythreetemp)} °C</div>

        </div>

    </div>

)

}

export default WeatherForecast;