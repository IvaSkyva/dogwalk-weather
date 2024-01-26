import React from 'react';

import sunnycouds from '../../assets/autumsunny2.jpg'
import rainy from '../../assets/zatazeno4.png'
import windy from '../../assets/rainy3.png'
import rainysunny from '../../assets/rainysunny2.jpg'
import autumsunny from '../../assets/autumsunny2.jpg'

const WeatherImage = ({ temper }) => {
  let temperaturText;
  let imageUrl;
  

  if (temper < 0) {
    temperaturText = 'Pěkná kosa';
    imageUrl = autumsunny;
  } else if (temper >= 0 && temper < 10) {
    temperaturText = 'Chladno';
    imageUrl = windy;
  } else if (temper >= 10 && temper < 20) {
    temperaturText = 'Příjemně';
    imageUrl = sunnycouds;
  } else if (temper >= 20 && temper < 30) {
    temperaturText = 'Teploučko';
    imageUrl = rainy;
  } else {
    temperaturText = 'Horko';
    imageUrl = rainysunny;
  }

  return (
  <div>{temperaturText}
  <div><img src={imageUrl} alt={'pocasi'}/></div>
  </div>
  )
};

export default WeatherImage;

