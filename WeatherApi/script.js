import cities from "./countries.js";
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let hour = document.querySelector(".hour");
let day = document.querySelector(".day");
let date = document.querySelector(".date-number");
let month = document.querySelector(".month");
let period = document.querySelector(".am_pm");

let input = document.querySelector("#cityInput");
let list = document.querySelector("#citySuggestions");
let weatherButton = document.querySelector("#getWeatherBtn");

let location = document.querySelector(".location");

let totalMonths = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

let totalDays = [
  "Sunday",

  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateClock() {
  let current_date = new Date();
  let tempDay = current_date.getDay();
  let tempDate = current_date.getDate();
  let tempMonth = current_date.getMonth();
  let tempHours = current_date.getHours();
  let tempMinutes = current_date.getMinutes();
  let tempSeconds = current_date.getSeconds();

  if (tempHours > 12) {
    period.innerHTML = "PM";
  } else {
    period.innerHTML = "AM";
  }
  day.innerHTML = totalDays[tempDay];
  date.innerHTML = tempDate;
  month.innerHTML = totalMonths[tempMonth];

  minute.innerHTML = tempMinutes;
  hour.innerHTML = tempHours;
  second.innerHTML = tempSeconds;
}

setInterval(() => {
  updateClock();
}, 1000);

for (let i = 0; i < cities.length; i++) {
  let option = document.createElement("option");
  option.value = cities[i]["name"];
  option.innerText = cities[i]["code"];
  list.appendChild(option);
}

let currentcity = "";
let currentcountry = "";
let currentcode = "";
let apiCall = "";

weatherButton.addEventListener("click", (e) => {
  currentcity = input.value;
  currentcode = input.innerText;

  console.log(currentcity);

  for (let j = 0; j < cities.length; j++) {
    if (currentcity == cities[j]["name"]) {
      currentcountry = cities[j]["country"];
      currentcode = cities[j]["code"];
      console.log(currentcountry);
      console.log(currentcode);
      //generate an api link from openweather and use it here :)
      apiCall = `https://useYourOwnToken/data/2.5/weather?q=${currentcity},${currentcode}&APPID=abcd&units=metric`;
    } else {
    }
  }
  weatherResult();
  weatherAPI(apiCall);
});

function weatherResult() {
  location.innerText = `${currentcity}, ${currentcountry}`;
}

let temp = document.querySelector(".temperature");
let tempstate = document.querySelector(".temperatureState");
let feelLike = document.querySelector(".feelLike");
let humidity = document.querySelector(".Humidity");
let windSpeed = document.querySelector(".windSpeed");
let pressure = document.querySelector(".pressure");
let visibility = document.querySelector(".visibility");

/* ===== INTEGRATED AI VOICEOVER LOGIC WITHIN YOUR MAIN FUNCTION ===== */
async function weatherAPI(call) {
  apiCall = call;
  try {
    let response = await fetch(apiCall);
    if (response.ok) {
      let data = await response.json();
      
      // 1. Map API responses cleanly to your DOM elements
      temp.innerText = `${Math.round(data.main.temp)}°C`;
      tempstate.innerText = `${data.weather[0].main}`; // Using clean categories like "Sunny"
      feelLike.innerText = `Feels like ${Math.round(data.main.feels_like)}°C`;
      humidity.innerText = `${data.main.humidity}%`;
      windSpeed.innerText = `${data.wind.speed} km/h`;
      pressure.innerText = `${data.main.pressure} hPa`;
      visibility.innerText = `${data.visibility / 1000} km`;

      // 2. Synthesize actionable insights into a clean string script
      const voiceScript = `Currently in ${currentcity}, ${currentcountry}. It is ${data.weather[0].main} with a temperature of ${Math.round(data.main.temp)} degrees Celsius, feeling like ${Math.round(data.main.feels_like)} degrees.`;
      
      // 3. Fire up the voiceover engine instantly upon successful API payload fetch
      const utterance = new SpeechSynthesisUtterance(voiceScript);
      utterance.rate = 0.95; // Giving it a smooth, articulate cadence
      window.speechSynthesis.cancel(); // Terminate any stale audio queues
      window.speechSynthesis.speak(utterance);

      console.log("Good ho gya & AI is speaking!");
    } else {
      console.log("Unable to fetch API....");
    }
  } catch (error) {
    console.log("Error", error);
  }
}
