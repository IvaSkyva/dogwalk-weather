const getTemperClass = (icons) => {
    
  
    let temperClass = ''; //zmena pozadi
    if (icons === '01d') {
      temperClass = 'jasno';
    } 
    else if (icons === '02d') {
      temperClass = 'skorojasno';
    } 
    else if (icons === '03d') {
      temperClass = 'skorozatazeno';
    } 
    else if (icons === '10d') {
      temperClass = 'cloudysunny';
    }
    else if (icons === '09d' || icons === '04d') {
      temperClass = 'zatazeno';
    }
    else if (icons === '11d') { 
      temperClass = 'bourka';
    } 
    else if (icons === '50d' || icons === '50n') { 
      temperClass = 'mlha';
    }  
    else if (icons === '13d') { 
      temperClass = 'zima';
    } 
    else if (icons === '13n') { 
      temperClass = 'zimanoc';
    }
    else {
      temperClass = 'noc';
    }
  
    return temperClass;
  };
  
  export { getTemperClass };