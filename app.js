const canvas = document.getElementById("canvas");
const video = document.getElementById("video");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.innerText = currentYear + 1;

function updateCountDown() {
  const currentTime = new Date();
  const timeDifference = newYearTime - currentTime;

  const d = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
  const h = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  const m = Math.floor(timeDifference / 1000 / 60) % 60;
  const s = Math.floor(timeDifference / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

function letItSnow() {
  video.playbackRate = 0.4;
  const snowFlake = document.createElement("i");
  let randomFlake = Math.floor(Math.random() * 11);

  if (randomFlake < 5) {
    snowFlake.classList.add("far");
    snowFlake.style.color = "rgb(215, 230, 255)";
  } else {
    snowFlake.classList.add("fas");
    snowFlake.style.color = "rgb(200, 220, 255)";
  }
  snowFlake.classList.add("fa-snowflake");
  snowFlake.style.marginLeft = Math.random() * window.innerWidth + "px";
  snowFlake.style.animationDuration = Math.random() * 20 + 11 + "s";
  snowFlake.style.opacity = Math.random() + 0.1;
  snowFlake.style.fontSize = Math.random() * 10 + 10 + "px";
  canvas.append(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, 30000);
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

function finalDisplay() {
  updateCountDown();
  letItSnow();
}

setInterval(finalDisplay, 100);
