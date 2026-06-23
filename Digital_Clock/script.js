let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let hour = document.querySelector(".hour");
let day = document.querySelector(".day");
let date = document.querySelector(".date-number");
let month = document.querySelector(".month");

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

  day.innerHTML = totalDays[tempDay];
  date.innerHTML = tempDate;
  month.innerHTML = totalMonths[tempMonth];

  minute.innerHTML = tempMinutes;
  hour.innerHTML = tempHours;
  second.innerHTML = tempSeconds;
}

setInterval(() => {
  updateClock();
}, 100);
