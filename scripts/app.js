//base balance
const balanceText = document.querySelector(".balance-text");
localStorage.setItem("$", 100);
balanceText.textContent = localStorage.getItem("$") + " $";

// burger menu
const menuIcon = document.querySelector(".burger-menu");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

//coinflip
const coin = document.querySelector("#coin");
const button1 = document.querySelector("#flip1");
const button2 = document.querySelector("#flip2");
const status = document.querySelector("#status");
const day = document.querySelector("#dayCount");
const night = document.querySelector("#nightCount");
let input = document.querySelector(".input");

let dayCount = 0;
let nightCount = 0;

function deferFn(callback, ms) {
  setTimeout(callback, ms);
}

function processResult(result) {
  if (result === "day") {
    dayCount++;
    day.innerText = dayCount;
  } else {
    nightCount++;
    night.innerText = nightCount;
  }
  status.innerText = result.toUpperCase();
}

function flipCoin() {
  coin.setAttribute("class", "");
  const random = Math.random();
  const result = random < 0.5 ? "day" : "night";
  deferFn(function () {
    coin.setAttribute("class", "animate-" + result);
    input.value = "";
    deferFn(processResult.bind(null, result), 2900);
  }, 100);
}

button1.addEventListener("click", flipCoin);
button2.addEventListener("click", flipCoin);
