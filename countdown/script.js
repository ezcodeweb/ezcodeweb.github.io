const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const loading = document.getElementById("loading");

const nextYear = new Date().getFullYear();
const newYearTime = new Date(`February 10 ${nextYear} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const difference = newYearTime - currentTime;
  const currentDays = Math.floor(difference / 1000 / 60 / 60 / 24);
  const currentHours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const currentMinutes = Math.floor(difference / 1000 / 60) % 60;
  const currentSeconds = Math.floor(difference / 1000) % 60;
  days.innerText = currentDays;
  hours.innerText = currentHours < 10 ? "0" + currentHours : currentHours;
  minutes.innerText =
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
  seconds.innerText =
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
}


const currentTime = new Date();
const difference = newYearTime - currentTime;
const day = Math.floor(difference / 1000 / 60 / 60 / 24);
const hour = Math.floor(difference / 1000 / 60 / 60) % 24;
const minute = Math.floor(difference / 1000 / 60) % 60;
const second = Math.floor(difference / 1000) % 60;

if(day<=0 && hour<=0 && minute<=0 && second<=0){
    window.location.replace("https://ezcodeweb.github.io/");
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(updateCountdown, 1000);
