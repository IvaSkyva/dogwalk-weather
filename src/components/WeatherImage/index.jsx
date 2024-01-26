import React from 'react';




const WeatherImage = ({ icons, temper }) => {
  
  let temperText;
  

  if ((icons === '01d' || icons === '01n') && temper < 20) {
    temperText = 'Jasná obloha bez mráčku, nenechávejte psa zavřeného v autě, teplota v zavřeném autě rychle stoupá. Pokud je to možné, vyhněte se procházce po rozehřátem asfaltu.';
  } 
  else if ((icons === '01d' || icons === '01n') && (temper >= 0 && temper <= 20)) {
    temperText = 'Jasná obloha bez mráčku, počasí i na delší vycházku.';
  }
  else if ((icons === '01d' || icons === '01n') && (temper <= 0 && temper >= -25)) {
    temperText = 'Jasná obloha bez mráčku, pokud je to možné, vyhněte se nasoleným chodníkům. Po vycházce opláchněte případnou sůl z tlapek studenou vodou a namažte je krémem na tlapky.';
  }
  else if ((icons === '02d' || icons === '02n') && (temper >= 25 && temper <= 42)) {
    temperText = 'Polojasno, nenechávejte psa zavřeného v autě, teplota v zavřeném autě rychle stoupá. Pokud je to možné, vyhněte se procházce po asfaltu.';
  }
  else if ((icons === '02d' || icons === '02n') && (temper >= 15 && temper <= 25)) {
    temperText = 'Polojasno, počasí i na delší vycházku';
  }
  else if ((icons === '02d' || icons === '02n') && (temper >= 5 && temper <= 15)) {
    temperText = 'Polojasno, počasí i na delší vycházku';
  } 
  else if ((icons === '02d' || icons === '02n') && (temper >= 0 && temper <= 5)) {
    temperText = 'Polojasno. Vycházka bude příjemnější v rychlejším tempu, starší psi s nemocnými klouby ocení lehčí obleček.';
  } 
  else if ((icons === '02d' || icons === '02n') && (temper <= 0 && temper >= -15)) {
    temperText = 'Polojasno a chladno, starší psi budou potřebovat teplejší obleček.';
  }
  else if ((icons === '03d' || icons === '03n') && (temper >= 25 && temper <= 42)) {
    temperText = 'Skoro jasno, nenechávejte psa zavřeného v autě, teplota v zavřeném autě rychle stoupá. Pokud je to možné, vyhněte se procházce po asfaltu.';
  }
  else if ((icons === '03d' || icons === '03n') && (temper >= 15 && temper <= 25)) {
    temperText = 'Skoro jasno, počasí i na delší vycházku.';
  }
  else if ((icons === '03d' || icons === '03n') && (temper >= 5 && temper <= 15)) {
    temperText = 'Skoro jasno, počasí i na delší vycházku.';
  }  
  else if ((icons === '03d' || icons === '03n') && (temper >= 0 && temper <= 5)) {
    temperText = 'Skoro jasno a chladněji, starší psi s nemocnými klouby ocení lehčí obleček.';
  }
  else if ((icons === '03d' || icons === '03n') && (temper <= 0 && temper >= -15)) {
    temperText = 'Skoro jasno a chladno. Vycházka bude příjemnější v rychlejším tempu, starší psi budou potřebovat teplejší obleček.';
  }
  else if ((icons === '04d' || icons === '04n') && (temper >= 0 && temper <= 22)) {
    temperText = 'Skoro zataženo.';
    }  
  else if ((icons === '04d' || icons === '04n') && (temper <= 0 && temper >= -15)) {
  temperText = 'Skoro zataženo a chladno. Počasí trochu nevlídné, starší psi ocení něco teplejšího na sebe.';
  } 
  else if ((icons === '09d' || icons === '09n') && (temper >= 10 && temper <= 30)) {  
    temperText = 'Přeháňky, většina asi procházku zkrátí na nutné minimum.'
  }
  else if ((icons === '09d' || icons === '09n') && (temper >= 0 && temper <= 10)) {  
    temperText = 'Přeháňky, většina asi procházku zkrátí na nutné minimum, někteří dostanou oblečky. Ty by měly být nepromokavé, v provlhlém oblečku hrozí prochladnutí psa a následné zdravotní potíže.'
  }
  else if ((icons === '09d' || icons === '09n') && (temper <= 0 && temper >= -5)) {  
    temperText = 'Přeháňky, může hrozit náledí, většina asi procházku zkrátí na nutné minimum, starší psi přivítají zateplené nepromokavé oblečky. V provlhlém oblečku hrozí prochladnutí psa a následné zdravotní potíže.'
  } 
  else if ((icons === '10d' || icons === '10n') && (temper >= 10 && temper <= 30) ) { 
    temperText = 'Střídavě oblačno s deštěm.'
  }
  else if ((icons === '10d' || icons === '10n') && (temper >= 0 && temper <= 10) ) { 
    temperText = 'Střídavě oblačno s deštěm, na vycházku se může hodit nepromokavý obleček, především pro starší psy, mající potíže s klouby.'
  }
  else if ((icons === '10d' || icons === '10n') && (temper <= 0 && temper >= -5) ) { 
    temperText = 'Střídavě oblačno s deštěm, místy může hrozit náledí, na vycházku se může hodit nepromokavý obleček. Především starší psi, mající potíže s klouby, by měli být v chladném počasí chráněni funkčním oblečkem, který nenavlhne a ochrání je tím před prochladnutím.'
  }
  else if ((icons === '13d' || icons === '13n') && (temper >= 0 && temper <= 10) ) { 
    temperText = 'Sněžení, na vycházku se může hodit nepromokavý zateplený obleček. Především starší psi, mající potíže s klouby, by měli být v chladném počasí chráněni zatepleným oblečkem, který nenavlhne a ochrání je před prochladnutím. Také krátkosrstí psi žijící v bytech ocení na ven zateplený obleček. Pokud je to možné, vyhněte se nasoleným chodníkům.'
  }
  else if ((icons === '13d' || icons === '13n') && (temper <= 0 && temper >= -25) ) { 
    temperText = 'Sněžení, pokud je to možné, vyhněte se nasoleným chodníkům. Po vycházce opláchněte případnou sůl z tlapek studenou vodou a namažte je krémem na tlapky. Na vycházku se může hodit nepromokavý zateplený obleček, především pro starší psy, mající potíže s klouby, kteří by měli být v chladném počasí chráněni oblečkem, který nenavlhne a ochrání je před prochladnutím.'
  }
  else if ((icons === '50d' || icons === '50n') && (temper >= 0 && temper <= 15) ) { 
    temperText = 'Mlhavo, na vycházku v mlze je dobré opatřit sebe i psa reflexními prvky.'
  }
  else if ((icons === '50d' || icons === '50n') && (temper <= 0 && temper >= -15) ) { 
    temperText = 'Mlhavo, na vycházku v mlze je dobré opatřit sebe i psa reflexními prvky. Může hrozit náledí. Starší psi, mající potíže s klouby, by měli být v chladném počasí chráněni zatepleným oblečkem, který nenavlhne a ochrání je před prochladnutím.  Pokud je to možné, vyhněte se nasoleným chodníkům.'
  }
  
  return (
  <div>{temperText}</div>
  );
};

export default WeatherImage;