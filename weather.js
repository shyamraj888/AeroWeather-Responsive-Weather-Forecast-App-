
// 🗝️ Replace with your OpenWeatherMap API key
const API_KEY = "4077e8e2dc76f6ae414f07d611a1aaaf";
document.getElementById('loadr').classList.remove('spinner-grow');



document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const City = document.getElementById('Inputname').value.trim();

  console.log(City);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`;

  let getdata = async () => {



    let reponse = await fetch(url);

    let data = await reponse.json();
    console.log(data);
    if (data) {
      document.getElementById('cityName').textContent = data.name;
      document.getElementById('temp').textContent = `Temperature: ${data.main.temp} (Feels Like : ${data.main.feels_like})`

      document.getElementById('humi').textContent = `Humidity: ${data.main.humidity}% `
      document.getElementById('weat').textContent = `Weather: ${data.weather[0].description} `
      document.getElementById('wspeed').textContent = `Wind Speed: ${data.wind.speed} ; Direction : ${data.wind.deg}°`
      document.getElementById('ll').textContent = `Latitude: ${data.coord.lat}°, Longitude : ${data.coord.lon}° `
      document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;




      const sunriseTime = new Date(data.sys.sunrise * 1000);
      const sunsetTime = new Date(data.sys.sunset * 1000);

      const sunriseStr = sunriseTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
      const sunsetStr = sunsetTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });


      document.getElementById('suns').textContent = `Sunrise: ${sunriseStr}, Sunset: ${sunsetStr}`

    }
    else if (!data) {
      document.getElementById('cityName').textContent = `Provide Valid City`;
    }

  }





  setTimeout(() => {
    document.getElementById('cityName').textContent = `Wait a Sec...`;

  }, 100);

  setInterval(() => {
    document.getElementById('loadr').classList.add('spinner-grow');
  }, 2000);


  setTimeout(getdata, 2000);


})




