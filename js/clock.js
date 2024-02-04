const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#date");
const hour = clock.querySelector("#hour");
const minute = clock.querySelector("#minute");
const dot = clock.querySelector("#dot");

let counter = true;

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  day.innerText = date.toLocaleDateString("ko-KR");
  hour.innerText = hours;
  minute.innerText = minutes;

  if (!counter) {
    dot.classList.add("hide-dot");
  } else {
    dot.classList.remove("hide-dot");
  }
  counter = !counter;
  // clock.innerText = date.toLocaleTimeString("en-US", { hour12: false });
}

getClock();
setInterval(getClock, 1000);
