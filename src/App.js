import React, {useState} from "react";

import "./App.css";

import WeatherForecast from "./components/WeatherForecast";
import WeatherNow from "./components/WeatherNow"



 const App = () => {

    const [cityname, setCityname] = useState('Liberec')

    const handleClick = (event) => {
      setCityname(event.target.value)
    }

  return (
     

    <div className="App">
       <div className="container">
        <h1>Předpověď počasí pro vycházku se psem</h1>
        <div className="weather">
          { <div className="button-group">
            <button className="button"onClick={handleClick} value='Liberec' >Liberec</button>
            <button className="button"onClick={handleClick} value='Prague' >Praha</button>
            <button className="button"onClick={handleClick} value='Pilsen'>Plzeň</button>
            <button className="button"onClick={handleClick} value='Ceske Budejovice' >České Budějovice</button>
            <button className="button"onClick={handleClick} value='Brno'>Brno</button>
            <button className="button"onClick={handleClick} value='Olomouc' >Olomouc</button>
            <button className="button"onClick={handleClick} value='Ostrava'>Ostrava</button>
          </div> } 


           <WeatherNow cityname={cityname} />
           <WeatherForecast cityname={cityname}/>

         </div>
      </div> 
    </div>

    
  );
};


export default App;
