let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let day = currentTime.getDay();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let dateElement = document.querySelector("#date-time");
dateElement.innerHTML = `${days[day]} ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  searchFor(cityInput.value);
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", searchCity);

function displayIcon(response) {
 
  let iconElement = document.querySelector("#icon");
  
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchFor(city) {
  let apiKey = "393dd0732c47a5dd655d8f664b0e8d02";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function displayWeatherConditionC(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperatureC").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchC(city) {
  let apiKey = "393dd0732c47a5dd655d8f664b0e8d02";
  let apiUrlC = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlC).then(displayWeatherConditionC);
}
