const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
  day.innerText = date.toLocaleDateString("ko-KR");
  // clock.innerText = date.toLocaleTimeString("en-US", { hour12: false });
}

getClock();
// setInterval(getClock, 1000);
