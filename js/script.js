const title = document.querySelector("#title");
title.style.opacity = 0;
setTimeout(() => {
  title.style.opacity = 1;
}, 2000);

const matrix = document.getElementById("matrix");

for (let i = 0; i < 100; i++) {
  const num = document.createElement("span");
  num.classList.add("num");
  num.innerHTML = Math.floor(Math.random() * 2);
  num.style.left = `${Math.floor(Math.random() * 100)}%`;
  matrix.appendChild(num);
}


const title = document.querySelector("h1");

title.style.animation = "title-entry 1s forwards";


var timeLeft = 15;
var countdown = document.getElementById("countdown");
var time = document.getElementById("time");

var countdownInterval = setInterval(function() {
  timeLeft--;
  time.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(countdownInterval);
    countdown.textContent = "La página ha vuelto al inicio.";
    window.location.href = "/";
  }
}, 1000);


