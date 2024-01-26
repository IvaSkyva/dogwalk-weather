import React from 'react';



const Temperature = ({ temper }) => {
  let temperaturText;
 

  if (temper < 0) {
    temperaturText = 'Pěkná kosa';
    
  } else if (temper >= 0 && temper < 10) {
    temperaturText = 'Chladno';
     
  } else if (temper >= 10 && temper < 20) {
    temperaturText = 'Příjemně';
    
  } else if (temper >= 20 && temper < 30) {
    temperaturText = 'Teploučko';
    
  } else {
    temperaturText = 'Horko';
    
  }

  return (
  <div>{temperaturText}
  
  </div>
  )
};

export default Temperature;

