function displayTemp(response) {
  let temperature = Math.round(response.data.temperature.current);
  currentWeather = document.querySelector(".current-weather-temp");
  currentWeather.innerHTML = temperature;

  let displayCity = document.querySelector(".cityName");
  displayCity.innerHTML = response.data.city;

  let feelsLikeTemp = Math.round(response.data.temperature.feels_like);
  feelsLikeWeather = document.querySelector(".feels-like-temp");
  feelsLikeWeather.innerHTML = `${feelsLikeTemp}℃`;

  let humidity = Math.round(response.data.temperature.humidity);
  currentHumidity = document.querySelector(".current-humidity");
  currentHumidity.innerHTML = `${humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  currentWind = document.querySelector(".current-wind-speed");
  currentWind.innerHTML = `${wind}km/h`;

  let status = response.data.condition.description;
  currentStatus = document.querySelector(".current-weather-status");
  currentStatus.innerHTML = status;

  let currentWeatherIcon = document.querySelector(".current-weather-icon");
  currentWeatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-weather-icon"/>`;

  console.log(response);
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-form-input");

  let apiKey = "adc0a90t8dcb394of632b681def20c7d";
  let city = cityInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

let now = new Date();

let currentHour = now.getHours().toString().padStart(2, "0");

let currentMinutes = now.getMinutes().toString().padStart(2, "0");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];

let currentTime = document.querySelector(".current-time");
currentTime.innerHTML = `${currentDay} ${currentHour}:${currentMinutes} `;

let searchButton = document.querySelector("#search-city");
searchButton.addEventListener("submit", searchCity);
