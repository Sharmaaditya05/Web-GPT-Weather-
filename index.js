function getWeather() {
    const location = document.getElementById("location").value;
    const api_key = "3af11f8c0a6c2b112cfe7065329b9f7d"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = data.weather[0].description;
        const temperature = data.main.temp;
        const city = data.name;
        const country = data.sys.country;
        const weatherInfo = `Current weather in ${city}, ${country}: ${weather}, Temperature: ${temperature}°C`;
        document.getElementById("weather-info").innerHTML = weatherInfo;
      })
      .catch(error => console.log(error));
  }
  