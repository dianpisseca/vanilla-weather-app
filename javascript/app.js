let now = new Date();

let currentHour = now.getHours();
console.log(currentHour);

let currentMinutes = now.getMinutes().toString().padStart(2, "0");
console.log(currentMinutes);

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

// to get tomorrows date
let tomorrow = new Date();
tomorrow.setDate(now.getDate() + 2); // Set the date to tomorrow
let tomorrowDay = days[tomorrow.getDay()]; // Get the day of the week for tomorrow
console.log(tomorrowDay);

let currentTime = document.querySelector(".current-time");
currentTime.innerHTML = `${currentDay} ${currentHour}:${currentMinutes} `;

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", searchCity);
